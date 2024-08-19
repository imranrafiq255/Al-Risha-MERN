const mongoose = require("mongoose");

const zoneSchema = mongoose.Schema(
  {
    zoneId: {
      type: String,
      required: [true, "Zone id is required"],
      unique: true,
    },
    zoneName: {
      type: String,
      required: [true, "Zone name is required"],
    },
    zoneState: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "StateOfIssuance",
      required: [true, "Zone state is required"],
    },
    zoneStatus: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const zoneModel = mongoose.model("Zone", zoneSchema);

module.exports = zoneModel;
