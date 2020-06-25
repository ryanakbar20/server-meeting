const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  participant: {
    type: String,
    required: true,
  },
  note: {
    type: String,
    required: true,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

const Member = mongoose.model('Data', dataSchema);
module.exports = Member;
