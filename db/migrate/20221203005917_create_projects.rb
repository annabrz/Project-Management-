class CreateProjects < ActiveRecord::Migration[6.1]
  def change
    create_table :projects do |t|
      t.string :project_title
      t.datetime :end_date
      t.string :detail
      t.belongs_to :manager
      t.belongs_to :employee

      t.timestamps
    end
  end
end
