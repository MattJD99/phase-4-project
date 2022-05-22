# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "🌱 Seeding spices..."

User.destroy_all
Exercise.destroy_all
Workout.destroy_all

#Users

matt = User.create!(username: "Matt", password: "password", email: "dayclawtel@gmail.com", age: 29, weight: 173)
kimmy = User.create!(username: "Kimmy", password: "password", email: "kimmy@gmail.com", age: 28, weight: 133)
lebron = User.create!(username: "Lebron", password: "password", email: "x@gmail.com", age: 99, weight: 999)

#Exercises

Exercise.create!(exercise_name: "Bicep Curl", video_link: "in7PaeYlhrM", description: "Curls and stuff.")
Exercise.create!(exercise_name: "Lunges", video_link: "wrwwXE_x-pQ", description: "Lunges for balance.")
Exercise.create!(exercise_name: "Push Ups", video_link: "tWjBnQX3if0", description: "Workout that chest.")
Exercise.create!(exercise_name: "Squats", video_link: "QifjltKUMCk", description: "Get low and feel the burn.")
Exercise.create!(exercise_name: "Standing overhead dumbbell presses", video_link: "OOe_HrNnQWw", description: "Shoulders get big.")

# Workouts

Workout.create!(user_id: matt.id, exercise_id: 2, sets: 3, reps: 12, weight: 35)
# Workout.create!(user_id: kimmy.id, exercise_id: 5, sets: 2, reps: 6, weight: 20)
# Workout.create!(user_id: x.id, exercise_id: 2, sets: 5, reps: 7, weight: 35)
# Workout.create!(user_id: x.id, exercise_id: 4, sets: 9, reps: 9, weight: 90)
# matt.workout.create!(exercise_id: 2, sets: 3, reps: 12, weight: 35)
# matt.workouts.create!(exercise_id: 5, sets: 9, reps: 9, weight: 99)

puts "Users created: #{User.all.count}"
puts "Workouts created: #{Workout.all.count}"
puts "Exercises created: #{Exercise.all.count}"

puts "✅ Done seeding!"