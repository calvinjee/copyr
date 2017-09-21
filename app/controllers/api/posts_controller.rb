require 'metainspector'
require 'open-uri'

class Api::PostsController < ApplicationController

  IMAGE_TYPES = ['image/gif', 'image/jpeg', 'image/png']

  def index
    @followed_users_posts = Post.followed_users_posts(current_user)
    @current_user_posts = Post.current_user_posts(current_user)
    @current_user_liked_post_ids = Post.liked_post_ids(current_user)
    @follower_ids = User.follower_ids(current_user)
    @followed_user_ids = User.followed_user_ids(current_user)

    @recommended_users = User.recommended_users(current_user)
    @radar_post = Post.radar_post(current_user)

    render 'api/posts/index'
  end

  def create
    @post = Post.new(post_params)
    if params[:post][:content_type] == 'link'
      if !params[:post][:link_url].empty?

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
    if IMAGE_TYPES.include?(str.content_type)
      render plain: url, status: 202
    else
      render plain: false, status: 422
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
