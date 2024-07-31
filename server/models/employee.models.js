const mongoose = require("mongoose");

const employeeSchema = mongoose.Schema(
  {
    employeeId: {
      type: String,
      required: [true, "Employee Id is required"],
      unique: [
        true,
        "Employee Id should be unique, it is already existed into database",
      ],
    },
    companyName: String,
    vendorName: String,
    project: String,
    avatar: String,
    emiratesId: {
      type: String,
      unique: [true, "Emirates id should be unique"],
    },
    joiningDate: {
      type: String,
      match: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
    },
    firstName: String,
    lastName: String,
    currentAddress: String,
    nationality: String,
    gender: String,
    email: {
      type: String,
      unique: [true, "Email should be unique"],
    },
    dob: {
      type: String,
      match: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
    },
    foreignBankAcc: String,
    nativeBankAcc: String,
    passportNo: String,
    passportIssueDate: {
      type: String,
      match: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
    },
    passportExpiryDate: {
      type: String,
      match: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
    },
    driverLicense: String,
    licenseIssueDate: {
      type: String,
      match: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
    },
    licenseExpiryDate: {
      type: String,
      match: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
    },
    sinceDate: {
      type: String,
      match: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
    },
    stateOfIssuance: String,
    alRishaCharges: String,
    salaryType: String,
    receivableFromCareem: String,
    payableToVendor: String,
    employeeStatus: String,
    passportReceived: Boolean,
    passportReturned: Boolean,
    laborCardNo: String,
    cardIssue: {
      type: String,
      match: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
    },
    cardExpiry: {
      type: String,
      match: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
    },
    careemId: String,
    shiftTime: String,
    phoneNumber: String,
    jobType: String,
    carType: String,
    emergenceNo: String,
    employerName: String,
    employerPosition: String,
    employerContact: String,
    employerCity: String,
    employerNOCStatus: String,
    dateOfEmployment: {
      type: String,
      match: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])$/,
    },
    granterName: String,
    granterJobAddress: String,
    granterHomeAddress: String,
    granterResidentialAddress: String,
    granterRelationWithDA: String,
    granterPhoneNumber: String,
    granterPhone: String,
    granterCountry: String,
    granterHomeTown: String,
    granterOccupation: String,
    granterHomeHeadName: String,
    granterFamilyHeadOccupation: String,
    country: String,
    homeAddress: String,
    homeTownCity: String,
    familyHeadName: String,
    familyHeadPhoneNumber: String,
    familyHeadOccupation: String,
    applicantSignatureAndDate: String,
  },
  { timestamps: true }
);

const employeeModel = mongoose.model("Employee", employeeSchema);
module.exports = employeeModel;
