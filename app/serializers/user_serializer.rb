require 'pry'

class UserSerializer 
  include JSONAPI::Serializer

  attributes :id, :username, :email, :age, :weight, :workout, :exercises
  has_many :workout
  # has_many :exercises, through: :workout

  attribute :exercises do |object|
    ExerciseSerializer.new(object.exercises)
  end

end
