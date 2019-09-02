Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      post 'user_token' => 'user_token#create'
      resources :users
      resources :articles
    end
  end
end
