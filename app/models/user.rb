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
    attr_reader :password
    validates :username, :email, :session_token, :password_digest, presence: true
    validates :username, :email, uniqueness: true
    validates :password, length: { minimum: 8 }, allow_nil: true
    before_validation: ensure_session_token
    
    # Associations for videos/lists
    # 
    # 
    # 

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username)
        return nil unless user && user.is_password?(password)
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def is_password?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    def reset_session_token!
        self.new_token
        self.save!
        self.session_token
    end

    private

    def ensure_session_token
        self.session_token || self.reset_session_token!
    end

    def new_token
        self.session_token = SecureRandom.urlsafe_base64
        while User.find_by( session_token: self.session_token)
            self.session_token = SecureRandom.urlsafe_base64
        end
        self.session_token
    end

end
