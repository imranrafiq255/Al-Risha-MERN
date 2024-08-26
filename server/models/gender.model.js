const mongoose = require('mongoose');

const GenderSchema = new mongoose.Schema({
  genderId: {
    type: String,
    required: true,
    unique: true
  },
  gender: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    required: true
  }
}, { timestamps: true });

const Gender = mongoose.model('Gender', GenderSchema);

module.exports = Gender;
