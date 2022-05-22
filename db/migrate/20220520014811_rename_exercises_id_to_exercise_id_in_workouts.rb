class RenameExercisesIdToExerciseIdInWorkouts < ActiveRecord::Migration[6.1]
  def change
    rename_column :workouts, :exercises_id, :exercise_id
  end
end
