const mongoose = require("mongoose");

const projectSchema = mongoose.Schema(
  {
    projectId: {
      type: String,
      unique: [true, "Project id should be unique"],
      required: [true, "Project id is required"],
    },
    projectName: {
      type: String,
      required: [true, "Project name is required"],
    },
    projectStartDate: {
      type: String,
      match: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
    },
    companyName: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required: [true, "Project company name is required"],
    },
    projectStatus: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const projectModel = mongoose.model("Project", projectSchema);

module.exports = projectModel;
