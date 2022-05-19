class WorkoutSerializer
  include JSONAPI::Serializer

  attributes :id, :sets, :reps, :weight, :exercise_id, :user_id
end
