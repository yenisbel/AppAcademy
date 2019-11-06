class House < ApplicationRecord
    has_many :residents, class_name: Person.to_s
    validates_presence_of :address
end