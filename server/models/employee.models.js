const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema({
  emFirstName: String,
  emLastName: String,
  emCurrentAddress: String,
  emSince: String,
  emDOB: String,
  emNativeCountry: String,
  emGender: String,
  emPhone: String,
  emBankAccount: String,
  emBankAccountNative: String,
  emDrivingLicense: String,
  emStateOfIssuance: String,
  emLicenseIssueDate: String,
  emLicenseExpiryDate: String,
  emEmail: {
    type: String,
    unqiue: [true, "Email should be unqiue"],
  },
  emEmiratesId: {
    type: String,
    unqiue: [true, "Emirates Id should be unqiue"],
  },
  emPassportNo: String,
  emPassportExpiry: String,
  emEmergence: String,
  emFixSalary: String,
  alRishaChargesManual: String,
  receiveableFromCareem: String,
  payableToVender: String,
});

const employeeModel = mongoose.model("Employee", employeeSchema);
module.exports = employeeModel;
