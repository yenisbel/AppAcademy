class User < ApplicationRecord
    validates :username, :password_digest, :session_token, presence: true
    validates :password, length: { minimum: 6, allow_nil: true }
    attr_reader :password

    after_initialize :ensure_session_token

    def self.find_by_credentials(username, password)
        user = User.find_by(username: username )
        return nil unless user
        if user.is_password?(password)
            return user
        else
            return nil
        end
    end

    def self.generate_session_token
        SecureRandom.urlsafe_base64(16)
    end

    def reset_session_token
        self.session_token = User.generate_session_token
        save!
        self.session_token
    end

    def is_password?(password)
       password_bcrypt = BCrypt::Password.new(self.password_digest)
       password_bcrypt.is_password?(password)
        
    end

    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password) 
    end
    

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end
end