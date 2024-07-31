const mongoose = require("mongoose");

const salaryTypeSchema = mongoose.Schema(
  {
    salaryTypeId: {
      type: String,
      unique: [true, "Salary type id should be unique"],
      required: [true, "Salary type id is required"],
    },
    salaryTypeName: {
      type: String,
      unique: [true, "Salary type name should be unique"],
      required: [true, "Salary type name is required"],
    },
    salaryTypeStatus: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const salaryTypeModel = mongoose.model("SalaryType", salaryTypeSchema);

module.exports = salaryTypeModel;
