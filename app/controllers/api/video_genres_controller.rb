class Api::VideoGenresController < ApplicationController
    def index
        @video_genres = VideoGenre.all
    end
    
end
