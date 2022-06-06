class ExercisesController < ApplicationController

    def index
        exercises = Exercise.all
        render json: ExerciseSerializer.new(exercises), status: :ok
    end

end
