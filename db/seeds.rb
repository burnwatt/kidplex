# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
#   Video.create( title:"", synopsis:"", year: );
User.destroy_all
Video.destroy_all

woody = User.create(username: 'woody', email: 'woody@andysroom.com', password:'4SnakeInMyBoots!');
buzz = User.create(username: 'buzz', email: 'buzz@andysroom.com', password:'2Infinity&Beyond!');
demo = User.create(username: 'demo', email: 'demo@kidplex.com', password:'Movies123!');

Video.create( title:"Toy Story", synopsis:"A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room.", year: 1995);
Video.create( title:"Toy Story 2", synopsis:"When Woody is stolen by a toy collector, Buzz and his friends set out on a rescue mission to save Woody before he becomes a museum toy property with his roundup gang Jessie, Prospector, and Bullseye.", year: 1999);
Video.create( title:"Toy Story 3", synopsis:"The toys are mistakenly delivered to a day-care center instead of the attic right before Andy leaves for college, and it's up to Woody to convince the other toys that they weren't abandoned and to return home.", year: 2010);
Video.create( title:"Pokemon: The Movie", synopsis:"Scientists genetically create a new Pokémon, Mewtwo, but the results are horrific and disastrous.", year: 1998);
Video.create( title:"Pokemon: The Movie 3", synopsis:"In the town of Greenfield, a young, lonely girl's dreams and wishes are brought into reality by a collective of reality-warping Pokémon.", year: 2000);
Video.create( title:"Batman Forever", synopsis:"Batman must battle former district attorney Harvey Dent, who is now Two-Face and Edward Nygma, The Riddler with help from an amorous psychologist and a young circus acrobat who becomes his sidekick, Robin.", year: 1995);
Video.create( title:"Batman and Robin", synopsis:"Batman and Robin try to keep their relationship together even as they must stop Mr. Freeze and Poison Ivy from freezing Gotham City.", year: 1997);
Video.create( title:"Willy Wonka and the Chocolate Factory", synopsis:"A poor but hopeful boy seeks one of the five coveted golden tickets that will send him on a tour of Willy Wonka's mysterious chocolate factory.", year: 1971);
Video.create( title:"Fantasia 2000", synopsis:"An updated collection of animated interpretations of great works of Western classical music.", year: 1999);
Video.create( title:"A Bug's Life", synopsis:"A misfit ant, looking for 'warriors' to save his colony from greedy grasshoppers, recruits a group of bugs that turn out to be an inept circus troupe.", year: 1998);
Video.create( title:"Buzz Lightyear of Star Command", synopsis:"Buzz Lightyear must battle Emperor Zurg with the help of three hopefuls who insist on being his partners.", year: 2000);
Video.create( title:"How to Train Your Dragon", synopsis:"A hapless young Viking who aspires to hunt dragons becomes the unlikely friend of a young dragon himself, and learns there may be more to the creatures than he assumed.", year: 2010);
Video.create( title:"The Emperor's New Groove", synopsis:"Emperor Kuzco is turned into a llama by his ex-administrator Yzma, and must now regain his throne with the help of Pacha, the gentle llama herder.", year: 2000);
Video.create( title:"Shaun the Sheep: Off the Baa!", synopsis:"The flock play a game of football with a cabbage.", year: 2007);

