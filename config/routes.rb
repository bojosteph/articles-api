Rails.application.routes.draw do
  
  scope '/api' do 
    post 'user_token' => 'user_token#create'
    resources :users
    resources :articles do 
      resources :comments, only: [:index]
    end

    resources :comments

  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end