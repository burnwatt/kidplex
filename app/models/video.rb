# == Schema Information
#
# Table name: videos
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  synopsis   :string           not null
#  year       :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Video < ApplicationRecord
    validates :title, :synopsis, :year, presence: true
    
    #Associations for genres/lists
    has_many :video_genres,
        foreign_key: :video_id,
        class_name: :VideoGenre

    has_many :genres,
        through: :video_genres,
        source: :genre

    #ActiveStorage
    has_one_attached :movie
    has_one_attached :trailer
    has_one_attached :poster
end
