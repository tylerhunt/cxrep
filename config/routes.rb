Rails.application.routes.draw do
  resources :sites, only: :show do
    resources :reports, only: %i[create show edit update]
  end

  resource :session, only: %i[new create destroy]

  get 'home', to: 'home#index'
  get 'up' => 'rails/health#show', as: :rails_health_check

  # Render dynamic PWA files from app/views/pwa/* (remember to link manifest in
  # application.html.erb)
  # get 'manifest' => 'rails/pwa#manifest', as: :pwa_manifest
  # get 'service-worker' => 'rails/pwa#service_worker', as: :pwa_service_worker

  root 'home#index'
end
