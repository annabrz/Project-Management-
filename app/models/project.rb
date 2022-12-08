class Project < ApplicationRecord
<<<<<<< HEAD
    # has_many :tasks
=======
    has_many :tasks, dependent: :destroy
    has_many :users, through: :tasks
>>>>>>> 13b047ad2e6b607ad301fb7168401c490c5e7239
end
