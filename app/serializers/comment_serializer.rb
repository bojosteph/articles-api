class CommentSerializer < ActiveModel::Serializer
  attributes :id, :body, :email, :user_id
  belongs_to :user
  belongs_to :article

  def email
    object.user.email
  end
end
