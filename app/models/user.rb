# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  username        :string
#  email           :string           not null
#  session_token   :string           not null
#  password_digest :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
    attr_reader :password
    validates :email, :session_token, :password_digest, presence: true
    validates :email, uniqueness: true
    validates :password, length: { minimum: 8, allow_nil: true }
    after_initialize :ensure_session_token
    
    # Associations for videos/lists
    # 
    # 
    # 

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email)
        return user if user && user.is_password?(password)
        nil
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

    def new_token
        self.session_token = SecureRandom.urlsafe_base64
        while User.find_by( session_token: self.session_token)
            self.session_token = SecureRandom.urlsafe_base64
        end
        self.session_token
    end

    private

    def ensure_session_token
        self.session_token || self.new_token
    end

end
