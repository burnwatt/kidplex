@video_genres.each do |video_genre|
    json.set! video_genre.id do
        json.extract! video_genre, :id, :genre_id, :video_id 
    end
end