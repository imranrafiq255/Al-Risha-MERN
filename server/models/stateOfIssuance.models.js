const mongoose = require("mongoose");

const stateOfIssuanceSchema = mongoose.Schema(
  {
    stateId: {
      type: String,
      unique: [true, "State id should be unique"],
      required: [true, "State id is required"],
    },
    stateName: {
      type: String,
      unique: [true, "State name should be unique"],
      required: [true, "State name is required"],
    },
    stateStatus: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const stateOfIssuanceModel = mongoose.model(
  "StateOfIssuance",
  stateOfIssuanceSchema
);

module.exports = stateOfIssuanceModel;
