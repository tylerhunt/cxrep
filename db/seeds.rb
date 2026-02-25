# This file should ensure the existence of records required to run the
# application in every environment (production, development, test). The code
# here should be idempotent so that it can be executed at any point in every
# environment. The data can then be loaded with the bin/rails db:seed command
# (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end

tyler =
  User
    .create_with(name: 'Tyler Hunt', password: ENV.fetch('PASSWORD'))
    .find_or_create_by!(email: 'tyler@tylerhunt.com')

widgets =
  Site
    .create_with(name: 'Ye Olde Widget Shoppe')
    .find_or_create_by!(url: 'https://widgets.example')

Membership
  .create_with(user: tyler)
  .find_or_create_by!(site: widgets)
