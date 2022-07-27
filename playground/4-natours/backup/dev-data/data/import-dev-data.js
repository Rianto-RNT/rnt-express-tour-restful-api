const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Tour = require('./../../models/tourModel');
const Review = require('./../../models/reviewModel');
const User = require('./../../models/userModel');

dotenv.config({ path: './config.env' });

// Database Connections
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

// Mongoose connections here
mongoose
  .connect(DB, {
    useUnifiedTopology: true,
    useNewUrlParser: true
    // useCreateIndex: true,
    // useFindAndModify: false
  })
  .then(() => console.log('MongoDB connections successful!'));

// Read Json File
const tours = JSON.parse(
  fs.readFileSync(`${__dirname}/tours.json`, 'utf-8') // <- IMPORT EXPORT
);
const users = JSON.parse(
  fs.readFileSync(`${__dirname}/users.json`, 'utf-8') // <- IMPORT EXPORT
);
const reviews = JSON.parse(
  fs.readFileSync(`${__dirname}/reviews.json`, 'utf-8') // <- IMPORT EXPORT
);

// Import data into Database
const importData = async () => {
  try {
    await Tour.create(tours);
    await User.create(users, { validateBeforeSave: false });
    await Review.create(reviews);
    console.log('Data successfuly loaded!');
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

// Delete all data from database
const deleteData = async () => {
  try {
    await Tour.deleteMany();
    await User.deleteMany();
    await Review.deleteMany();
    console.log('Data successfuly deleted!');
    process.exit();
  } catch (err) {
    console.log(err);
  }
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}

console.log(process.argv);
