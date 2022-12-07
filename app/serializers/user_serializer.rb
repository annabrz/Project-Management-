class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :position, :manager?, :email, :avatar
  
end
