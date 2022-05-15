class User < ApplicationRecord
    has_secure_password
    has_many :workouts, dependent: :destroy
    has_many :exercises, through: :workouts
    validates :username, uniqueness: true, presence: true
    validates :password, length: {in: 4..250}
end
