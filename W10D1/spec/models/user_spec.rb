require 'rails_helper'

RSpec.describe User, type: :model do
    subject(:user) do
        User.create!(username: 'User1', password: 'passw12')
    end

    it {should validate_presence_of (:username)}
    it {should validate_uniqueness_of (:username)}
    #it {should have_many (goals)}
end

