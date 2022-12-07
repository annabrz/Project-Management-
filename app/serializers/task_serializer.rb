class TaskSerializer < ActiveModel::Serializer
  attributes :id, :content, :project_id, :user_id
  
end
