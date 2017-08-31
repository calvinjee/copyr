Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show, :update] do
      post '/follows', to: 'users#follow'
      delete '/follows', to: 'users#unfollow'
    end

    resource :session, only: [:create, :destroy]

    resources :posts, only: [:index, :create, :show, :update, :destroy] do
      post '/likes', to: 'posts#like'
      delete '/likes', to: 'posts#unlike'
    end

    get '/posts/prefetch', to: 'posts#prefetch'
  end

  root to: 'static_pages#root'
end
