class Trip < ApplicationRecord
  belongs_to :user
  has_one :location, :dependent => :destroy
  has_many :activities, :dependent => :destroy

  def self.search(name)    
    Trip.where("first_name like ?", "%#{name}%")
 end

end
