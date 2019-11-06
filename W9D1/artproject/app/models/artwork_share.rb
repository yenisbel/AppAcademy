class ArtworkShare < ApplicationRecord
    validates :artwork_id, :viewer_id, presence: true

    belongs_to :artwork
    
    belongs_to :viewer,
        class_name: 'User',
        foreign_key: :viewer_id
end