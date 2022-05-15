class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :email, :age, :weight
  has_many :workouts
  has_many :exercises, through: :workouts
end
