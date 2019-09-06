class ArticleSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :content, :image_url
  belongs_to :user
  has_many :comments
end
