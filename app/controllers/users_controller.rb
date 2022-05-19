class UsersController < ApplicationController
    # skip_before_action :authorized!, only: [:create]
    
    def index
        user = User.all
        render json: user, status: :ok
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

    def destroy
        @user.destroy
        render json: {message: "Your profile has successfully been removed and destroyed."}, status: :ok
    end
    
    private

    def user_params
        params.permit(:username, :email, :age, :weight, :password, :password_confirmation)
    end
end