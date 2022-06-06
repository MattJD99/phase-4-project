class Exercise < ApplicationRecord
    has_many :workout #will automatically validate workout_id existance
    has_many :users, through: :workout
end
