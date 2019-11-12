class User < ApplicationRecord

    validates :username, presence: true, uniqueness: true
    validates :session_token, :password_digest, presence: true
    validates :password, length: { minimum: 7, allow_nil: true}

    # has_many :goals, class Goal
    # find by
    attr_reader :password
    after_initialize :ensure_session_token

    def find_by_credentials(username, password)
        user = User.find_by(username: username)
        return nil if user.nil?
        user.is_passw?(password) ? user : nil
    end
    
    def self.generate_session_token
        SecureRandom::urlsafe_base64(16)
    end
    
    def is_passw?(password)
        BCrypt::Password.new(self.password_digest).is_password?(password)
    end
    
    def reset_session_token
        self.session_token = self.class.generate_session_token
        self.save!
        self.session_token
    end

    def passw=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password)
    end

    def ensure_session_token
        self.session_token ||= User.generate_session_token
    end


end
