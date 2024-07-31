const mongoose = require("mongoose");

const nocStatusSchema = mongoose.Schema(
  {
    nocId: {
      type: String,
      unique: [true, "NOC id should be unique"],
      required: [true, "NOC id is required"],
    },
    nocStatus: {
      type: Boolean,
      default: false,
    },
    nocDetails: {
      type: String,
      required: [true, "NOC details is required"],
    },
  },
  { timestamps: true }
);

const nocStatusModel = mongoose.model("NocStatus", nocStatusSchema);

module.exports = nocStatusModel;
