class CommentSerializer < ActiveModel::Serializer
  attributes :id, :body, :user_name
  belongs_to :user
  belongs_to :article

  def user_name
    object.user.name
  end
end
