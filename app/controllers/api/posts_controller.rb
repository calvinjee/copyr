class Api::PostsController < ApplicationController
  def index
    @posts = Posts.all
    render 'api/posts/show'
  end

  def create
    @post = Post.new(post_params)
    if @post.save
      render 'api/posts/show'
    else
      render json: @post.errors.full_messages, status: 422
    end
  end

  def show
    @post = Post.find(params[:id])
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
      :audio
    )
  end

end
