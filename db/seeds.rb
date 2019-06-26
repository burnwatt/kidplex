# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all

woody = User.create(username: 'woody', email: 'woody@andysroom.com', password:'4SnakeInMyBoots!');
buzz = User.create(username: 'buzz', email: 'buzz@andysroom.com', password:'2Infinity&Beyond!');
demo = User.create(username: 'demo', email: 'demo@kidplex.com', password:'Movies123!');
