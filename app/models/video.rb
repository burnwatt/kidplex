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
    has_one_attached :movie
    #Associations for genres/lists
end
