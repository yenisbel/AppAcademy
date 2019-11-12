require 'rails_helper'
require 'byebug'

RSpec.describe UsersController, type: :controller do

  subject(:user) do
    User.create!(
    username: "user1",
    password: "password123")
  end

  describe "GET #show" do
    it "renders the show template" do
      get :show, params: { id: user.id }
      expect(response).to render_template(:show)
    end
  end

  describe "GET #index" do
    it "renders the index template" do
        get :index
        expect(response).to render_template(:index)
    end
   end

  describe "POST #create" do
    context "with invalid params" do
        it "validates the presence of the user's username and password" do
            post :create, params: {
                user: {
                username: "user1",
                password: ""
                }
            }
            expect(response).to render_template("new")
        end
        it "validates the password is right" do
            post :create, params: {
                user: {
                    username: "user1",
                    password: "passwor"
                }
            }
            expect(response).to render_template("new")
        end
    end

    context "with valid params" do
        it "got to user show if success login" do
            post :create, params: {
                user: {
                    username: "user1",
                    password: "password123"
                }
            }
            expect(response).to redirect_to(user_url)
        end
    end
  end
end
