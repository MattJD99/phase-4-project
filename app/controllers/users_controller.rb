require 'pry'

class UsersController < ApplicationController
    # skip_before_action :authorized!, only: [:create]
    
    def index
        user = User.all
        render json: user, status: :ok
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: UserSerializer.new(user), status: :created
    end

    def show # aka GET /me
        render json: UserSerializer.new(@current_user), status: :ok
    end
    
    private

    def user_params
        params.permit(:username, :email, :password, :password_confirmation)
    end
end