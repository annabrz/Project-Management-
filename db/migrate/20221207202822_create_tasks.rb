class CreateTasks < ActiveRecord::Migration[6.1]
  def change
    create_table :tasks do |t|
      t.string :content
      t.belongs_to :project
      t.belongs_to :user
      
      t.timestamps
    end
  end
end
