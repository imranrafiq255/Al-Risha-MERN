const mongoose = require("mongoose");

const guarantorSchema = mongoose.Schema(
  {
    guarantorId: {
      type: String,
      unique: [true, "Guarantor id should be unique"],
      required: [true, "Guarantor id is required"],
    },
    guarantorName: {
      type: String,
      unique: [true, "Guarantor name should be unique"],
      required: [true, "Guarantor name is required"],
    },
    guarantorPhoneNumber: {
      type: String,
      unique: [true, "Guarantor phone number should be unique"],
      required: [true, "Guarantor phone number is required"],
    },
    guarantorResidentialAddress: {
      type: String,
      required: [true, "guarantorResidentialAddress is required"],
    },
    guarantorOccupation: {
      type: String,
      required: [true, "guarantorOccupation is required"],
    },
    guarantorJobAddress: {
      type: String,
      required: [true, "guarantorJobAddress is required"],
    },
    guarantorRelationWithDA: {
      type: String,
      required: [true, "guarantorRelationWithDA is required"],
    },
    guarantorStatus: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const guarantorModel = mongoose.model("Guarantor", guarantorSchema);

module.exports = guarantorModel;
