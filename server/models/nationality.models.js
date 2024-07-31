const mongoose = require("mongoose");

const nationalitySchema = mongoose.Schema(
  {
    nationalityId: {
      type: String,
      unqiue: [true, "Nationality id should be unique"],
      required: [true, "Nationality id is required"],
    },
    nationality: {
      type: String,
      unqiue: [true, "Nationality should be unique"],
      required: [true, "Nationality is required"],
    },
    nationalityStatus: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const nationalityModel = mongoose.model("Nationality", nationalitySchema);

module.exports = nationalityModel;
