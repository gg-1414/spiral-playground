Rails.application.routes.draw do

  root "pages#show", page: "index"
  
  get '*path' => redirect('/')

end
