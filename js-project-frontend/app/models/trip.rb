class Trip < ApplicationRecord
  belongs_to :user
  has_one :location 
  has_many :activities 
end