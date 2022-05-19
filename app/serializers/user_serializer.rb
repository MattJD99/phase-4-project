class UserSerializer 
  include JSONAPI::Serializer

  attributes :id, :username, :email, :age, :weight, :password_digest, :password, :password_confirmation
  has_many :workouts
  has_many :exercises, through: :workouts
end
