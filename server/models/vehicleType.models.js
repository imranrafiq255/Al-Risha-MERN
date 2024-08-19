const mongoose = require("mongoose");

const vehicleTypeSchema = mongoose.Schema(
  {
    vehicleTypeId: {
      type: String,
      unique: [true, "Vehicle type id should be unique"],
      required: [true, "Vehicle type id required"],
    },
    vehicleTypeName: {
      type: String,
      unique: [true, "Vehicle type name should be unique"],
      required: [true, "Vehicle type name required"],
    },
    vehicleTypeStatus: {
      type: Boolean,
      default: 0,
    },
  },
  { timestamps: true }
);

const vehicleTypeModel = mongoose.model("VehicleType", vehicleTypeSchema);

module.exports = vehicleTypeModel;
