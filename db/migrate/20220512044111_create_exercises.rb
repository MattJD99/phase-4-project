class CreateExercises < ActiveRecord::Migration[6.1]
  def change
    create_table :exercises do |t|
      t.string :exercise_name
      t.text :description
      t.string :video_link

      t.timestamps
    end
  end
end
