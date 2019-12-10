class Artwork < ApplicationRecord
    validates :title, :artist_id, presence: true, uniqueness: true
    validates :image_url, presence: true

    belongs_to :artist,
        class_name: 'User',
        foreign_key: :artist_id,
        primary_key: :id

    has_many :artwork_shares

    has_many :shared_viewers,
        through: :artwork_shares,
        source: :viewer

    has_many :comments,
        dependent: :destroy

        # class method that returns all of the artworks made by the user OR
        # shared with the user
    def self.artworks_by_user_id(user_id)
        Artwork
            .left_outer_joins(:artwork_shares)
            .where('(artworks.artist_id = :user_id) OR (artwork_shares.viewer_id = :user_id)', user_id: user_id)
            .distinct
    end

end