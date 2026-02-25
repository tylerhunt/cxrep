require 'faker'

FactoryBot.define do
  factory :site do
    name { Faker::Company.name }
    url { Faker::Internet.url }
  end
end
