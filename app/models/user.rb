require 'uri'

class User < ApplicationRecord
  has_many :memberships, dependent: :destroy
  has_many :sites, through: :memberships

  has_secure_password

  validates :email, presence: true, format: { with: URI::MailTo::EMAIL_REGEXP }
end
