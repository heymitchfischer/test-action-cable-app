Rails.application.routes.draw do
  devise_for :users
  get '/' => 'static_pages#home'
  post '/messages' => 'messages#create'
  get '/get_current_user' => 'messages#get_current_user'
  mount ActionCable.server, at: '/cable'
end
