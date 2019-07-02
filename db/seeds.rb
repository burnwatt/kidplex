# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#   video = Video.create!({
#     title:" ",
#     synopsis:" ",
#     Year: 9999
#   })
require 'open-uri'

#NUKE TABLES!
User.destroy_all
Video.destroy_all
Genre.destroy_all
VideoGenre.destroy_all

#ActiveStorage formatting function
def formatVideo(video, poster, trailer, movie)
    poster = open(poster)
    trailer = open(trailer)
    movie = open(movie)

    video.poster.attach(io: poster, filename: "#{video.title.split.join}.png")
    video.trailer.attach(io: trailer, filename: "#{video.title.split.join}.mp4")
    video.movie.attach(io: movie, filename: "#{video.title.split.join}.m4v")
end

#Seed users
user_woody = User.create!(username: 'woody', email: 'woody@andysroom.com', password:'4SnakeInMyBoots!')
user_buzz = User.create!(username: 'buzz', email: 'buzz@andysroom.com', password:'2Infinity&Beyond!')
user_demo = User.create!(username: 'demo', email: 'demo@kidplex.com', password:'Movies123!')

#Seed genres
Genre.create!({genre:'Pixar'})
Genre.create!({genre:'Classics'})
Genre.create!({genre:'Superheroes'})
Genre.create!({genre: 'Pokemon'})

# ------------------------------Pixar-------------------------------------- 
ts1 = Video.create!( title:"Toy Story", synopsis:"A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room.", year: 1995)
ts2 = Video.create!( title:"Toy Story 2", synopsis:"When Woody is stolen by a toy collector, Buzz and his friends set out on a rescue mission to save Woody before he becomes a museum toy property with his roundup gang Jessie, Prospector, and Bullseye.", year: 1999)
ts3 = Video.create!( title:"Toy Story 3", synopsis:"The toys are mistakenly delivered to a day-care center instead of the attic right before Andy leaves for college, and it's up to Woody to convince the other toys that they weren't abandoned and to return home.", year: 2010)
bugs = Video.create( title:"A Bug's Life", synopsis:"A misfit ant, looking for 'warriors' to save his colony from greedy grasshoppers, recruits a group of bugs that turn out to be an inept circus troupe.", year: 1998)
inside_out = Video.create!({
    title: "Inside Out",
    synopsis: "After young Riley is uprooted from her Midwest life and moved to San Francisco, her emotions - Joy, Fear, Anger, Disgust and Sadness - conflict on how best to navigate a new city, house, and school.",
    year: 2015
})

coco = Video.create!({
    title: "Coco",
    synopsis: "Despite his family's generations-old ban on music, young Miguel dreams of becoming an accomplished musician like his idol Ernesto de la Cruz. Desperate to prove his talent, Miguel finds himself in the stunning and colorful Land of the Dead.",
    year: 2017
})

PIXAR_POSTERS = [
    "https://kidplex-dev.s3.us-east-2.amazonaws.com/video-data/pixar/posters/ts1.png",
    "https://kidplex-dev.s3.us-east-2.amazonaws.com/video-data/pixar/posters/ts2.png",
    "https://kidplex-dev.s3.us-east-2.amazonaws.com/video-data/pixar/posters/ts3.png",
    "https://kidplex-dev.s3.us-east-2.amazonaws.com/video-data/pixar/posters/bugs.png",
    "https://kidplex-dev.s3.us-east-2.amazonaws.com/video-data/pixar/posters/inside_out.png",
    "https://kidplex-dev.s3.us-east-2.amazonaws.com/video-data/pixar/posters/coco.png",
]

PIXAR_TRAILERS = [
    "https://kidplex-dev.s3.us-east-2.amazonaws.com/video-data/pixar/trailers/ts1.mp4",
    "https://kidplex-dev.s3.us-east-2.amazonaws.com/video-data/pixar/trailers/ts2.mp4",
    "https://kidplex-dev.s3.us-east-2.amazonaws.com/video-data/pixar/trailers/ts3.mp4",
    "https://kidplex-dev.s3.us-east-2.amazonaws.com/video-data/pixar/trailers/bugs.mp4",
    "https://kidplex-dev.s3.us-east-2.amazonaws.com/video-data/pixar/trailers/inside_out.mp4",
    "https://kidplex-dev.s3.us-east-2.amazonaws.com/video-data/pixar/trailers/coco.mp4",
]

PIXAR_MOVIES = [
    "https://kidplex-dev.s3.us-east-2.amazonaws.com/video-data/pixar/movies/ts1.mp4",
    "https://kidplex-dev.s3.us-east-2.amazonaws.com/video-data/pixar/movies/ts2.mp4",
    "https://kidplex-dev.s3.us-east-2.amazonaws.com/video-data/pixar/movies/ts3.mp4",
    "https://kidplex-dev.s3.us-east-2.amazonaws.com/video-data/pixar/movies/bugs.mp4",
    "https://kidplex-dev.s3.us-east-2.amazonaws.com/video-data/pixar/movies/inside_out.mp4",
    "https://kidplex-dev.s3.us-east-2.amazonaws.com/video-data/pixar/movies/coco.mp4",
]

PIXAR = [ts1, ts2, ts3, bugs, inside_out, coco]

PIXAR.each_with_index do |video, i|
    formatVideo(video, PIXAR_POSTERS[i], PIXAR_TRAILERS[i], PIXAR_MOVIES[i])
end

PIXAR.each do |video|
    VideoGenre.create!({genre_id: 1, video_id: video.id})
end

# ----------------------------Classics------------------------------------ 
wonka = Video.create!( title:"Willy Wonka and the Chocolate Factory", synopsis:"A poor but hopeful boy seeks one of the five coveted golden tickets that will send him on a tour of Willy Wonka's mysterious chocolate factory.", year: 1971)
fantasia = Video.create!( title:"Fantasia 2000", synopsis:"An updated collection of animated interpretations of great works of Western classical music.", year: 1999)
emperor = Video.create!( title:"The Emperor's New Groove", synopsis:"Emperor Kuzco is turned into a llama by his ex-administrator Yzma, and must now regain his throne with the help of Pacha, the gentle llama herder.", year: 2000)

lion = Video.create!({
    title: "The Lion King",
    synopsis: "A Lion cub crown prince is tricked by a treacherous uncle into thinking he caused his father's death and flees into exile in despair, only to learn in adulthood his identity and his responsibilities.",
    year: 1994
})

aladdin = Video.create!({
    title: "Aladdin",
    synopsis: "A kindhearted street urchin and a power-hungry Grand Vizier vie for a magic lamp that has the power to make their deepest wishes come true.",
    year: 1992
})

shrek = Video.create!({
    title: "Shrek",
    synopsis: "A mean lord exiles fairytale creatures to the swamp of a grumpy ogre, who must go on a quest and rescue a princess for the lord in order to get his land back.",
    year: 2001
})

CLASSICS_POSTERS = [
    "https://kidplex-dev.s3.us-east-2.amazonaws.com/video-data/classics/posters/wonka.jpg",
    "https://kidplex-dev.s3.us-east-2.amazonaws.com/video-data/classics/posters/fantasia.jpg",
    "https://kidplex-dev.s3.us-east-2.amazonaws.com/video-data/classics/posters/emperor.jpg",
    "https://kidplex-dev.s3.us-east-2.amazonaws.com/video-data/classics/posters/lion.jpg",
    "https://kidplex-dev.s3.us-east-2.amazonaws.com/video-data/classics/posters/aladdin.jpg",
    "https://kidplex-dev.s3.us-east-2.amazonaws.com/video-data/classics/posters/shrek.jpg",
]

CLASSICS_TRAILERS = [
    "https://kidplex-dev.s3.us-east-2.amazonaws.com/video-data/classics/trailers/wonka.mp4",
    "https://kidplex-dev.s3.us-east-2.amazonaws.com/video-data/classics/trailers/fantasia.mp4",
    "https://kidplex-dev.s3.us-east-2.amazonaws.com/video-data/classics/trailers/emperor.mp4",
    "https://kidplex-dev.s3.us-east-2.amazonaws.com/video-data/classics/trailers/lion.mp4",
    "https://kidplex-dev.s3.us-east-2.amazonaws.com/video-data/classics/trailers/aladdin.mp4",
    "https://kidplex-dev.s3.us-east-2.amazonaws.com/video-data/classics/trailers/shrek.mp4",
]

CLASSICS_MOVIES = [
    "https://kidplex-dev.s3.us-east-2.amazonaws.com/video-data/classics/movies/wonka.mp4",
    "https://kidplex-dev.s3.us-east-2.amazonaws.com/video-data/classics/movies/fantasia.mp4",
    "https://kidplex-dev.s3.us-east-2.amazonaws.com/video-data/classics/movies/emperor.mp4",
    "https://kidplex-dev.s3.us-east-2.amazonaws.com/video-data/classics/movies/lion.mp4",
    "https://kidplex-dev.s3.us-east-2.amazonaws.com/video-data/classics/movies/aladdin.mp4",
    "https://kidplex-dev.s3.us-east-2.amazonaws.com/video-data/classics/movies/shrek.mp4",
]

CLASSICS = [wonka, fantasia, emperor, lion, aladdin, shrek]

CLASSICS.each_with_index do |video, i|
    formatVideo(video, CLASSICS_POSTERS[i], CLASSICS_TRAILERS[i], CLASSICS_MOVIES[i])
end

CLASSICS.each do |video|
    VideoGenre.create!({genre_id: 2, video_id: video.id})
end

# ---------------------------Superheroes---------------------------------- 
batman_forever = Video.create!( title:"Batman Forever", synopsis:"Batman must battle former district attorney Harvey Dent, who is now Two-Face and Edward Nygma, The Riddler with help from an amorous psychologist and a young circus acrobat who becomes his sidekick, Robin.", year: 1995);
batman_robin = Video.create!( title:"Batman and Robin", synopsis:"Batman and Robin try to keep their relationship together even as they must stop Mr. Freeze and Poison Ivy from freezing Gotham City.", year: 1997);
spiderman = Video.create!({
    title: "Spider-Man: Into the Spider-Verse",
    synopsis: "Teen Miles Morales becomes Spider-Man of his reality, crossing his path with five counterparts from other dimensions to stop a threat for all realities.",
    year: 2018
});
thor = Video.create!({
    title: "Thor: Ragnarok",
    synopsis: "Thor is imprisoned on the planet Sakaar, and must race against time to return to Asgard and stop Ragnarök, the destruction of his world, at the hands of the powerful and ruthless villain Hela.",
    year: 2017
});
infinity_war = Video.create!({
    title: "Avengers: Infinity War",
    synopsis: "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
    year: 2018
});
endgame = Video.create!({
    title: "Avengers: Endgame",
    synopsis: "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
    year: 2019
});
SUPERHEROES_POSTERS = [
    "https://kidplex-dev.s3.us-east-2.amazonaws.com/video-data/superheroes/posters/batman_forever.jpg",
    "https://kidplex-dev.s3.us-east-2.amazonaws.com/video-data/superheroes/posters/batman_robin.jpg",
    "https://kidplex-dev.s3.us-east-2.amazonaws.com/video-data/superheroes/posters/spiderman.jpg",
    "https://kidplex-dev.s3.us-east-2.amazonaws.com/video-data/superheroes/posters/thor.jpg",
    "https://kidplex-dev.s3.us-east-2.amazonaws.com/video-data/superheroes/posters/infinity_war.jpg",
    "https://kidplex-dev.s3.us-east-2.amazonaws.com/video-data/superheroes/posters/endgame.jpg",
]

SUPERHEROES_TRAILERS = [
    "https://kidplex-dev.s3.us-east-2.amazonaws.com/video-data/superheroes/trailers/batman_forever.webm",
    "https://kidplex-dev.s3.us-east-2.amazonaws.com/video-data/superheroes/trailers/batman_robin.webm",
    "https://kidplex-dev.s3.us-east-2.amazonaws.com/video-data/superheroes/trailers/spiderman.mp4",
    "https://kidplex-dev.s3.us-east-2.amazonaws.com/video-data/superheroes/trailers/thor.mp4",
    "https://kidplex-dev.s3.us-east-2.amazonaws.com/video-data/superheroes/trailers/infinity_war.mp4",
    "https://kidplex-dev.s3.us-east-2.amazonaws.com/video-data/superheroes/trailers/endgame.mp4",
]

SUPERHEROES_MOVIES = [
    "https://kidplex-dev.s3.us-east-2.amazonaws.com/video-data/superheroes/movies/batman_forever.mp4",
    "https://kidplex-dev.s3.us-east-2.amazonaws.com/video-data/superheroes/movies/batman_robin.mp4",
    "https://kidplex-dev.s3.us-east-2.amazonaws.com/video-data/superheroes/movies/spiderman.mp4",
    "https://kidplex-dev.s3.us-east-2.amazonaws.com/video-data/superheroes/movies/thor.mp4",
    "https://kidplex-dev.s3.us-east-2.amazonaws.com/video-data/superheroes/movies/infinity_war.mp4",
    "https://kidplex-dev.s3.us-east-2.amazonaws.com/video-data/superheroes/movies/endgame.mp4",
]

SUPERHEROES = [batman_forever, batman_robin, spiderman, thor, infinity_war, endgame]

SUPERHEROES.each_with_index do |video, i|
    formatVideo(video, SUPERHEROES_POSTERS[i], SUPERHEROES_TRAILERS[i], SUPERHEROES_MOVIES[i])
end

SUPERHEROES.each do |video|
    VideoGenre.create!({genre_id: 3, video_id: video.id})
end

# --------------------------Pokemon----------------------------- 

pokemon_1 = Video.create!( title:"Pokemon: The Movie", synopsis:"Scientists genetically create a new Pokémon, Mewtwo, but the results are horrific and disastrous.", year: 1998);
pokemon_3 = Video.create!( title:"Pokemon: The Movie 3", synopsis:"In the town of Greenfield, a young, lonely girl's dreams and wishes are brought into reality by a collective of reality-warping Pokémon.", year: 2000);
pokemon_2 = Video.create!({
    title: "Pokemon: The Movie 2000",
    synopsis: "Ash Ketchum must gather the three spheres of fire, ice and lightning in order to restore balance to the Orange Islands.",
    year: 1999
});
pokemon_4 = Video.create!({
    title: "Pokemon 4Ever",
    synopsis: "Ash must stop a hunter who forces the mythical Pokémon Celebi to help him destroy a forest.",
    year: 2001
});
pokemon_x = Video.create!({
    title: "Pokemon: Destiny Deoxys",
    synopsis: "A comet bearing a deadly Pokemon creature crash-lands onto Earth, terrorising a nearby high-tech city, where Ash, Pikachu and friends are currently visiting...",
    year: 2004
});
pikachu = Video.create!({
    title: "Pokemon: Detective Pikachu",
    synopsis: "In a world where people collect Pokémon to do battle, a boy comes across an intelligent talking Pikachu who seeks to be a detective.",
    year: 2019
});

POKEMON_POSTERS = [
    "https://kidplex-dev.s3.us-east-2.amazonaws.com/video-data/pokemon/posters/pokemon_1.jpg",
    "https://kidplex-dev.s3.us-east-2.amazonaws.com/video-data/pokemon/posters/pokemon_3.jpg",
    "https://kidplex-dev.s3.us-east-2.amazonaws.com/video-data/pokemon/posters/pokemon_2.jpg",
    "https://kidplex-dev.s3.us-east-2.amazonaws.com/video-data/pokemon/posters/pokemon_4.jpg",
    "https://kidplex-dev.s3.us-east-2.amazonaws.com/video-data/pokemon/posters/pokemon_x.jpg",
    "https://kidplex-dev.s3.us-east-2.amazonaws.com/video-data/pokemon/posters/pikachu.jpg",
]

POKEMON_TRAILERS = [
    "https://kidplex-dev.s3.us-east-2.amazonaws.com/video-data/pokemon/trailers/pokemon_1.mp4",
    "https://kidplex-dev.s3.us-east-2.amazonaws.com/video-data/pokemon/trailers/pokemon_3.mp4",
    "https://kidplex-dev.s3.us-east-2.amazonaws.com/video-data/pokemon/trailers/pokemon_2.mp4",
    "https://kidplex-dev.s3.us-east-2.amazonaws.com/video-data/pokemon/trailers/pokemon_4.mp4",
    "https://kidplex-dev.s3.us-east-2.amazonaws.com/video-data/pokemon/trailers/pokemon_x.mp4",
    "https://kidplex-dev.s3.us-east-2.amazonaws.com/video-data/pokemon/trailers/pikachu.mp4",
]

POKEMON_MOVIES = [
    "https://kidplex-dev.s3.us-east-2.amazonaws.com/video-data/pokemon/movies/pokemon_1.mp4",
    "https://kidplex-dev.s3.us-east-2.amazonaws.com/video-data/pokemon/movies/pokemon_3.mp4",
    "https://kidplex-dev.s3.us-east-2.amazonaws.com/video-data/pokemon/movies/pokemon_2.webm",
    "https://kidplex-dev.s3.us-east-2.amazonaws.com/video-data/pokemon/movies/pokemon_4.mp4",
    "https://kidplex-dev.s3.us-east-2.amazonaws.com/video-data/pokemon/movies/pokemon_x.mp4",
    "https://kidplex-dev.s3.us-east-2.amazonaws.com/video-data/pokemon/movies/pikachu.mp4",
]

POKEMON = [pokemon_1, pokemon_3, pokemon_2, pokemon_4, pokemon_x, pikachu]

POKEMON.each_with_index do |video, i|
    formatVideo(video, POKEMON_POSTERS[i], POKEMON_TRAILERS[i], POKEMON_MOVIES[i])
end

POKEMON.each do |video|
    VideoGenre.create!({genre_id: 4, video_id: video.id})
end