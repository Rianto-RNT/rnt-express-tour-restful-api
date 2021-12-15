# Deployment to heroku
https://mighty-mountain-28594.herokuapp.com/

## MongoDB - LOCAL SERVER

# to MongoDB local shell:
> mongo

# create database / switch to use DB:
> use <database_name>

# insert data:
> db.tours.insertOne({name: "The Forest Hiker", price: 297, rating: 4.7})

# search data:
> db.tours.find()

# show all database:
> show dbs

# show database collections:
> show collections
# Create Multiple data in database localy:
> db.tours.insertMany([{name:"The Sea Exploler", price: 497, rating: 4.8},{name: "tThe Snow Adventurer", price: 997, rating: 4.9, difficulty: "easy"}])

# Find price less than <value>:
> db.tours.find({ price: {$lte: 500} })

# find price less than and rating greater than
> db.tours.find({price: {$lt: 500}, rating: {$gte: 4.8}})

# filter less than 
> db.tours.find({$or: [ {price: {$lt: 500}}, {rating: {$gte: 4.8}} ] })

# price filter show only name
> db.tours.find({$or: [ {price: {$gt: 497}}, {rating: {$gte: 4.8}} ] }, {name: 1}) 

# update one data
> db.tours.updateOne({name: "The Snow Adventurer"}, {$set: {price: 597} })


#  database Import and Delete
> node ./dev-data/data/import-dev-data.js --delete
> node ./dev-data/data/import-dev-data.js --import


# Run App in Development
> npm start
# Run Debugger
> npm run debug

# Run Builder
> npm run build:js
> npm run watch:js