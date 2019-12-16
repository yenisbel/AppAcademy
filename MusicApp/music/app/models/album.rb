class Album < ApplicationRecord
    validates :title, :year, band_id, presence: true, uniqueness: true
    validates :studio, inclusion: { in: [true, false] }

    belongs_to :band
    
    has_many :tracks, dependent: :destroy

    after_initialize :album_defaults

    def album_defaults
        self.studio ||= false
    end
end