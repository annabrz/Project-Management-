class UserSerializer < ActiveModel::Serializer
  attributes :id, :first_name, :last_name, :user_role, :email, :avatar
  
end
