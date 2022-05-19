class ExerciseSerializer
  include JSONAPI::Serializer

  attributes :id, :exercise_name, :description, :video_link
  # has_many :workouts
  # has_many :users, through: :workouts
end
