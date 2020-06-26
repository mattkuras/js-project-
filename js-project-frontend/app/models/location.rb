class Location < ApplicationRecord
  belongs_to :trip, optional: true 
  belongs_to :user, optional: true 
  has_many :activities, through: :trips 
end
