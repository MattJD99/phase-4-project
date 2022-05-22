require 'pry'

class UsersController < ApplicationController
    # skip_before_action :authorized!, only: [:create]
    
    def index
        user = User.all
        render json: user, include: :workout, status: :ok
    end

    def create
        # binding.pry
        user = User.create!(user_params)
        session[:user_id] = user.id
        # binding.pry
        render json: UserSerializer.new(user), status: :created
    end

    def show # aka GET /me
        render json: UserSerializer.new(@current_user), include: :workout, status: :ok
        # binding.pry
    end

    def destroy
        # user = User.find_by(params[:_json])
        user = User.find(params[:id])
        binding.pry
        user.destroy
        binding.pry
    end
    
    private

    def user_params
        params.permit(:username, :email, :age, :weight, :password, :password_confirmation)
    end
end