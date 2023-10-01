class User < ApplicationRecord

  has_secure_password

  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :username, presence: true
  validates :email, presence: true, uniqueness: { case_sensitive: false }
  validates :phone_number, presence: true
  validates :password, length: { minimum: 8 }
  
end
