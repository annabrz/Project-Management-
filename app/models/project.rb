class Project < ApplicationRecord
    has_many :tasks, dependent: :destroy
    has_many :users, through: :tasks
end
