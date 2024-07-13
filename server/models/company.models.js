const mongoose = require("mongoose");

const companySchema = mongoose.Schema(
  {
    companyId: {
      type: String,
      unique: [true, "Company id should be unique"],
      required: [true, "Company id is required"],
    },
    companyName: {
      type: String,
      required: [true, "Company name is required"],
    },
    companyAddress: {
      type: String,
      required: [true, "Company address is required"],
    },
    companyPOCName: {
      type: String,
      unique: [true, "Company POC name should be unique"],
      required: [true, "Company POC name is required"],
    },
    companyPOCEmail: {
      type: String,
      unique: [true, "Company POC Email is should be unique"],
      required: [true, "Company POC Email is required"],
      validate: {
        validator: function (v) {
          return /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v);
        },
        message: "Please enter a valid email address",
      },
    },
    companyPOCPhoneNumber: {
      type: String,
      unique: [true, "Company POC phone number should be unique"],
      required: [true, "Company POC phone number is required"],
    },
    companyStatus: {
      type: Boolean,
      required: [true, "Company status is required"],
      default: false,
    },
  },
  { timestamps: true }
);

const companyModel = mongoose.model("Company", companySchema);
module.exports = companyModel;
