class UsersController < ApplicationController
    # skip_before_action :authorized!, only: [:create]
    
    def index
        binding.pry
        users = User.all
        render json: users
    end

    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        binding.pry
        render json: UserSerializer.new(user), status: :created
    end

    def show
        render json: UserSerializer.new(@current_user), status: :ok
        render json: @current_user
    end

    private

    def user_params
        params.permit(:username, :email, :age, :weight, :password, :password_confirmation)
    end
end