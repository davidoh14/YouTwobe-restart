class CreateLikes < ActiveRecord::Migration[5.2]
  def change
    create_table :likes do |t|
      t.integer :liker_id, null: false
      t.integer :video_id, null: false
      t.string :type, null: false

      t.timestamps
    end
  end
end
