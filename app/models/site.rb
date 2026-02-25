class Site < ApplicationRecord
  has_many :reports, dependent: :destroy
  has_many :membersships, dependent: :destroy
  has_many :members, through: :memberships

  validates :name, presence: true
  validates :url, presence: true
end
