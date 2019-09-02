class User < ApplicationRecord
  has_secure_password
  has_many :articles, dependent: :destroy

    validates :email, presence: true
    validates :email, uniqueness: true
    validates :email, length: { minimum: 8 }
    validates :password_digest, presence: true

    def to_token_payload
      {
          sub: id,
          email: email
      }
  end  
end
