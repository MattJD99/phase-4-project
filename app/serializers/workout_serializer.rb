class WorkoutSerializer
  include JSONAPI::Serializer

  attributes :id, :sets, :reps, :weight, :exercise_id, :user_id
  belongs_to :user
  belongs_to :exercise
end
