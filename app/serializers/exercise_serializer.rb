class ExerciseSerializer < ActiveModel::Serializer
  attributes :id, :exercise_name, :description, :video_link, :workouts
  # has_many :workouts
  # has_many :users, through: :workouts
end
