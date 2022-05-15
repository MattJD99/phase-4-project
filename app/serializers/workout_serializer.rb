class WorkoutSerializer < ActiveModel::Serializer
  attributes :id, :sets, :reps, :weight, :exercise_id, :user_id
end
