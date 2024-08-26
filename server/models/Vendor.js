const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema({
  vendorId: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    match: /^[0-9]+$/, // Ensures the Vendor ID is a number
  },
  vendorName: {
    type: String,
    required: true,
    trim: true,
  },
  vendorAddress: {
    type: String,
    required: true,
    trim: true,
  },
  vendorPhoneNumber: {
    type: String,
    required: true,
    trim: true,
  },
  vendorPOCName: {
    type: String,
    required: true,
    trim: true,
  },
  status: {
    type: String,
    enum: ['active', 'inactive'],
    required: true,
  },
}, {
  timestamps: true, // Automatically adds createdAt and updatedAt fields
});

// Create and export the Vendor model
module.exports = mongoose.model('Vendor', vendorSchema);
