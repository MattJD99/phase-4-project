require 'pry'

class UserSerializer 
  include JSONAPI::Serializer

  attributes :id, :username, :email, :age, :weight
  has_many :workouts
  # has_many :exercises, through: :workouts
end
