require 'pry'
class ApplicationController < ActionController::API
    include ActionController::Cookies
    # include ActionController::Serialization
    rescue_from ActiveRecord::RecordNotFound, with: :no_route
    rescue_from ActiveRecord::RecordInvalid, with: :invalid_record
    # before_action :authorized!
    wrap_parameters format: [] #related to strong params and its ability to build a nested object in params

    private

    def current_user
        # If @current_user is nil or false, it will be set to User.find(session[:user_id])
        @current_user ||= User.find(session[:user_id]) if session[:user_id]
    end

    def authorized!
        no_route unless current_user
    end

    def invalid_record(invalid)
        render json: {error: invalid.record.errors.full_messages.to_sentence}, status: :unprocessable_entity
    end

    def no_route
        render json: {error: "Access not allowed."}, status: :unauthorized unless session.include?(:user_id)
    end

end