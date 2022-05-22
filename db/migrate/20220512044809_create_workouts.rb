class CreateWorkouts < ActiveRecord::Migration[6.1]
  def change
    create_table :workouts do |t|
      t.integer :sets
      t.integer :reps
      t.integer :weight
      t.references :user, null: false, foreign_key: true
      t.references :exercises, null: false, foreign_key: true

      t.timestamps
    end
  end
end
