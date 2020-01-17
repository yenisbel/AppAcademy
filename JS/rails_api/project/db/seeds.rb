# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Todo.destroy_all

todo0 = Todo.create!(
#   user: guest,
  title: 'Title0',
  body: 'if I study enough',
  done: false
)
todo1 = Todo.create!(
#   user: guest,
  title: 'Title1',
  body: 'employed',
  done: false
)
todo2 = Todo.create!(
#   user: guest,
  title: 'Title2',
  body: 'good human',
  done: false
)
