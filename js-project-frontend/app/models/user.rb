class User < ApplicationRecord
    has_many :activities
    has_many :trips 
    has_many :saves 
end
