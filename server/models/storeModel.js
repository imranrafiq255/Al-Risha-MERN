const mongoose = require("mongoose");

const storeSchema = mongoose.Schema(
  {
    storeId: {
      type: String,
      unique: [true, "Store ID should be unique"],
      required: [true, "Store ID is required"],
    },
    storeLocation: {
      type: String,
      required: [true, "Store Location is required"],
    },
    storeState: {
      type: String,
      required: [true, "Store State is required"],
    },
    storeStatus: {
      type: String,
      enum: ["Active", "Inactive"],
      default: "Inactive",
      required: [true, "Store Status is required"],
    },
  },
  { timestamps: true }
);

const storeModel = mongoose.model("Store", storeSchema);

module.exports = storeModel;
