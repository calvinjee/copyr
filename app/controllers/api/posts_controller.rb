require 'metainspector'

class Api::PostsController < ApplicationController

  IMAGE_TYPES = ['image/gif', 'image/jpeg', 'image/png']

  def index
    @followed_users_posts = Post.where(author_id: current_user.followed_users).includes(:likes).order(created_at: :desc).limit(20)
    @current_user_posts = Post.where(author_id: current_user.id).includes(:likes).order(created_at: :desc).limit(10)
    @current_user_liked_posts = current_user.likes.pluck(:post_id)
    @follower_ids = current_user.followers.pluck(:id)
    @followed_user_ids = current_user.followed_users.pluck(:id)

    @recommended_users = User.order('RANDOM()').limit(4)
    @radar_post = Post.where.not(author_id: current_user.id).order('RANDOM()').limit(1).first

    # @recommended_users = []
    # 4.times do
    #   user = User.where.not(id: current_user.id).order('RANDOM()').limit(1).first
    #   if !Follow.where(follower_id: current_user.id, followee_id: user.id).exists? && @recommended_users.exclude?(user)
    #     @recommended_users.push(user)
    #   else
    #     next
    #   end
    # end

    render 'api/posts/index'
  end

  def create
    @post = Post.new(post_params)

    if params[:post][:link_url] && params[:post][:content_type] == 'link'
      begin
        page = MetaInspector.new(params[:post][:link_url])
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
    @post = Post.find(params[:id])
    render 'api/posts/show'
  end

  def update
    @post = Post.find(params[:id])

    if @post.content_type == 'link' && @post.link_url != params[:post][:link_url]
      begin
        page = MetaInspector.new(params[:post][:link_url])
      rescue MetaInspector::TimeoutError, MetaInspector::RequestError, MetaInspector::ParserError => e
        render json: @post.errors[:base] < 'Error fetching link.'
      else
        @post.image_file_name = page.images.best
        @post.link_host = page.host
        @post.title = page.best_title
        @post.caption = page.best_description
      end
    end

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

  def like
    @like = Like.new(post_id: params[:post_id], user_id: current_user.id)
    if @like.save
      @post = @like.post
      render 'api/posts/show'
    else
      render json: @like.errors.full_messages, status: 422
    end
  end

  def unlike
    @like = Like.find_by(post_id: params[:post_id], user_id: current_user.id)
    @post = @like.post
    @like.destroy
    render 'api/posts/show'
  end

  def prefetch
    url = params[:image_url]
    str = open(url)
    debugger
    if IMAGE_TYPES.includes?(str.content_type)
      return url
    else
      return false
    end
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
