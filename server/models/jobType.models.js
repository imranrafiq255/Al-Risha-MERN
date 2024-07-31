const mongoose = require("mongoose");

const jobTypeSchema = mongoose.Schema(
  {
    jobTypeId: {
      type: String,
      unique: [true, "Job type id should be unique"],
      required: [true, "Job type id is required"],
    },
    jobTypeName: {
      type: String,
      unique: [true, "Job type name should be unique"],
      required: [true, "Job type name is required"],
    },
    jobTypeStatus: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const jobTypeModel = mongoose.model("JobType", jobTypeSchema);

module.exports = jobTypeModel;
