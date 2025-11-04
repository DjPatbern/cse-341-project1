require('dotenv').config();
const mongoose = require('mongoose');
const Contact = require('./models/Contact');

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('✅ Connected to MongoDB for seeding'))
  .catch(err => console.error('❌ MongoDB connection error:', err));

const contacts = [
  {
    firstName: 'Victor',
    lastName: 'Patrick',
    email: 'victor@example.com',
    favoriteColor: 'Blue',
    birthday: '1995-07-12'
  },
  {
    firstName: 'Zik',
    lastName: 'Johnson',
    email: 'zik@example.com',
    favoriteColor: 'Green',
    birthday: '1994-03-25'
  },
  {
    firstName: 'Ada',
    lastName: 'Williams',
    email: 'ada@example.com',
    favoriteColor: 'Purple',
    birthday: '1996-09-14'
  }
];

async function seedDB() {
  try {
    await Contact.deleteMany();
    await Contact.insertMany(contacts);
    console.log('🌱 Contacts successfully seeded!');
  } catch (err) {
    console.error('❌ Error seeding database:', err);
  } finally {
    mongoose.connection.close();
  }
}

seedDB();
