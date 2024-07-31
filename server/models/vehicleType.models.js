const mongoose = require("mongoose");

const vehicleTypeSchema = mongoose.Schema(
  {
    carTypeId: {
      type: String,
      unique: [true, "Car type id should be unique"],
      required: [true, "Car type id required"],
    },
    carTypeName: {
      type: String,
      unique: [true, "Car type name should be unique"],
      required: [true, "Car type name required"],
    },
    carTypeStatus: {
      type: Boolean,
      default: 0,
    },
  },
  { timestamps: true }
);

const vehicleTypeModel = mongoose.model("VehicleType", vehicleTypeSchema);

module.exports = vehicleTypeModel;
