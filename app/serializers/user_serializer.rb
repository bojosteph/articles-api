class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :email
  has_many :articles
  has_many :comments
end
