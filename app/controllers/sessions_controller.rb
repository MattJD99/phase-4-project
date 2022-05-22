require 'pry'

class SessionsController < ApplicationController
    # skip_before_action :authorized!, only: [:create]

    def create
        user = User.find_by_username(params[:username])
        if user&.authenticate(params[:password])
            # binding.pry
            session[:user_id] = user.id #line responsible for signing someone in
            render json: UserSerializer.new(user), status: :accepted
            # binding.pry
        else
            render json: {error: "Not authorized"}, status: :unauthorized
        end
    end

    def destroy
        # binding.pry
        session.delete(:user_id)
        # binding.pry
        # render json: {message: "You have been logged out."}, status: :accepted
        head :no_content
    end

    def omniauth
        auth = {username: params["Lu"]["tf"], email: params["Lu"]["Bv"], uid: params["profileObj"]["googleId"], provider: params["provider"]}
        user = User.from_omniauth(auth)
        if user.id
          session[:user_id] = user.id
          render json: UserSerializer.new(user), status: :created
        else
          render json: {error: user.errors.full_messages.to_sentence}, status: :unauthorized
        end
    end
end
