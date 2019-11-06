class Person < ApplicationRecord
    belongs_to :house
    validates_presence_of :name, :house_id 
end