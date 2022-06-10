require 'pry'
class WorkoutsController < ApplicationController

    def index
        render json: WorkoutSerializer.new(Workout.preload(:exercise)).serializable_hash, status: :ok
    end

    def update
        if current_user.workout.include?(@workout)
            @workout.update!(workout_params)
            render json: WorkoutSerializer.new(@workout).serializable_hash, status: :ok
        else
            render json: {error: "You don't have access to this workout"}, status: :unauthorized
        end
    end

    def record
        # @current_user = User.find_by(params[:user_id])
        workout = Workout.find_by(id: params[:id])
        workout.update(workout_params)
        render json: workout, status: :ok
    end

    private

    def workout_params
        params.permit(:id, :sets, :reps, :weight)
    end 

    def find_workout
        binding.pry
      Workout.where(user_id: @current_user.id)
    end
end
