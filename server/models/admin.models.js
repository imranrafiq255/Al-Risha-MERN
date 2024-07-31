const mongoose = require("mongoose");

const adminSchema = mongoose.Schema(
  {
    adminName: {
      type: String,
      required: [true, "Admin name is required!"],
    },
    adminEmail: {
      type: String,
      unique: [true, "Admin email should be unique"],
      match: [/^[^\s@]+@[^\s@]+\.[^\s@]+$/, ""],
      required: [true, "Admin email is required!"],
    },
    adminPassword: {
      type: String,
      minlength: [8, "Password should be greater than or equal to 8"],
      required: [true, "Admin password is required"],
    },
    adminAvatar: {
      type: String,
      required: [true, "Admin avatar is required"],
    },
    adminPhoneNumber: {
      type: String,
      required: [true, "Admin phone number is required"],
    },
  },
  { timestamps: true }
);

const adminModel = mongoose.model("Admin", adminSchema);

module.exports = adminModel;
