const mongoose = require("mongoose");

const shiftTimeSchema = mongoose.Schema(
  {
    shiftId: {
      type: String,
      unique: [true, "Shift id should be unique"],
      required: [true, "Shift id is required"],
    },
    shiftTime: {
      type: String,
      required: [true, "Shift time is required"],
    },
    shiftTimeStatus: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const shiftTimeModel = mongoose.model("ShiftTime", shiftTimeSchema);

module.exports = shiftTimeModel;
