class Api::PostsController < ApplicationController
  def index
    @posts = Post.all.includes(:author).order(created_at: :desc)
    render 'api/posts/index'
  end

  def create
    @post = Post.new(post_params)
    if params[post: :link_url]
      begin
        page = MetaInspector.new(params[post: :link_url])
      rescue MetaInspector::TimeoutError, MetaInspector::RequestError, MetaInspector::ParserError => e
        render json: @post.errors[:base] < 'Error fetching link.'
      else
        @post.image_file_name = page.images.best
        @post.link_host = page.host
        @post.title = page.best_title
        @post.caption = page.best_description
      end
    end
    if @post.save
      render 'api/posts/show'
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def show
    @post = Post.includes(:author).find(params[:id])
    render 'api/posts/show'
  end

  def update
    @post = Post.find(params[:id])
    if @post.update(post_params)
      render 'api/posts/show'
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def destroy
    @post = Post.find(params[:id])
    @post.destroy
    render json: @post
  end

  private

  def post_params
    params.require(:post).permit(
      :author_id,
      :title,
      :caption,
      :content_type,
      :text_content,
      :image,
      :video,
      :audio,
      :link_url
    )
  end
end
