class Exercise < ApplicationRecord
    has_many :workouts #will automatically validate workout_id existance
    has_many :users, through: :workouts
end
