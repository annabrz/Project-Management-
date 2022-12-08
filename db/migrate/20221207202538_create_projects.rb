class CreateProjects < ActiveRecord::Migration[6.1]
  def change
    create_table :projects do |t|
      t.string :project_title
      t.datetime :end_date
      t.string :detail
      
      t.timestamps
    end
  end
end
