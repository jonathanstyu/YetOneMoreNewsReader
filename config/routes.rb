NewReader::Application.routes.draw do
  resources :feeds, only: [:index, :create] do
    resources :entries, only: [:index]
  end
  
  resource :session, only: [:login, :create, :destroy]

  match 'login', :to => 'sessions#login'
  root to: "feeds#index"
end
