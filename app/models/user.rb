class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable, password_length: 8..128

  has_many :group_users
  has_many :groups, through: :group_users
  has_many :messages

  validates :name, presence: true, uniqueness: {case_sensitive: true}
end
