class ProjectSerializer < ActiveModel::Serializer
  attributes :id, :project_title,  :end_date, :detail
end
