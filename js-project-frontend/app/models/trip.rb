class Trip < ApplicationRecord
  belongs_to :user
  has_one :location, :dependent => :destroy
  has_many :activities, :dependent => :destroy
end
