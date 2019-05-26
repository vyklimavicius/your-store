# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Item.create([{"name": "Apple", "description": "Delicious fresh apple", "price": 1, "image": "http://localhost:3000/apple.jpg","category": "Fruit"},
{"name": "Milk", "description": "Fat free Milk", "price": 4, "image": "http://localhost:3000/milk.jpg","category": "Dairy"},
{"name": "Egg", "description": "Fresh AA grade eggs", "price": 3, "image": "http://localhost:3000/eggs.jpg","category": "Dairy"},
{"name": "Bread", "description": "Whole wheat grain", "price": 5, "image": "http://localhost:3000/bread.jpg","category": "Pastry"},
{"name": "Meat", "description": "Sirloin cut", "price": 7, "image": "http://localhost:3000/meat.jpg","category": "Meat"},
{"name": "Paper Towel", "description": "All use paper towel", "price": 6, "image": "http://localhost:3000/papertowel.jpg","category": "Home Goods"}])
