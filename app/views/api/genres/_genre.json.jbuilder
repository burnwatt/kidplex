json.extract! genre, :id, :genre
json.videoIds genre.videos.map{|video| video.id}
