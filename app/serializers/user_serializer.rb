class UserSerializer < ActiveModel::Serializer
  attributes :id, :username, :password_digest, :email, :age, :weight
end
