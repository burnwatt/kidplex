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

require 'test_helper'

class VideoTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
