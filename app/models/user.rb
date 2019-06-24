# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string           not null
#  email           :string           not null
#  session_token   :string           not null
#  password_digest :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
    before_validation: ensure_session_token
    validates :username, :email, :session_token, :password_digest, presence: true
    validates :username, :email, uniqueness: true
    validates :password, length: { minimum: 8 }, allow_nil: true

    def self.find_by_credentials(username, password)
    end

end
