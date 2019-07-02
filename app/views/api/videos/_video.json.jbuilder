json.extract! video, :id, :title, :year, :synopsis
json.poster_url url_for(video.poster)
json.trailer_url url_for(video.trailer)
json.movie_url url_for(video.poster)