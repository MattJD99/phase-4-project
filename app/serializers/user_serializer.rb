class UserSerializer 
  include JSONAPI::Serializer

  attributes :id, :username, :email, :age, :weight, :workout
  has_one :workout
  has_many :exercises, through: :workout
end
