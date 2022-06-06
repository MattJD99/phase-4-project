require 'pry'
class WorkoutsController < ApplicationController

    def index
        # workouts = Workout.where(user_id: @current_user.id)
        workouts = Workout.all
        # find_workout
        # render json: PostSerializer.new(Post.preload(:comments)).serializable_hash, status: :ok
        render json: WorkoutSerializer.new(workouts), status: :ok
    end

    def update
        # user = User.find(params[:user_id])
        # @current_user = User.find_by(params[:user_id])
        @workout = Workout.create(
            exercise_id: (params[:exercise_id]), 
            user_id: (params[:user_id]),
            sets: (params[:sets]),
            reps: (params[:reps]),
            weight: (params[:weight]))
        render json: @workout, status: :created
    end

    def record
        # binding.pry
        # @current_user = User.find_by(params[:user_id])
        workout = Workout.find_by(id: params[:id])
        # binding.pry
        workout.update(workout_params)
        render json: workout, status: :ok
        # binding.pry
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
