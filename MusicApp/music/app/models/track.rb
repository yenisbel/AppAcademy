class Track < ApplicationRecord
    validates :lyrics, :name, :ord, presence: true
    validates :bonus, inclusion: { in: [true, false] }
    validates :ord, uniqueness: { scope: :album_id }
  
    belongs_to :album
  
    has_one :band,
      through: :album,
      source: :band
  
    has_many :notes,
      dependent: :destroy
  
    after_initialize :track_defaults
  
    def track_defaults
      self.bonus ||= false
    end
end