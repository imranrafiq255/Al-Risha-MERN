const { STATUS_CODES } = require("http");
const employeeModel = require("../models/employee.models");

exports.addEmployeeDetails = async (req, res) => {
  try {
    const {
      employeeId,
      companyName,
      vendorName,
      project, // This was missing
      emiratesId,
      joiningDate,
      firstName,
      lastName,
      currentAddress,
      nationality,
      gender,
      email,
      dob,
      foreignBankAcc,
      nativeBankAcc,
      passportNo,
      passportIssueDate,
      passportExpiryDate,
      driverLicense,
      licenseIssueDate,
      licenseExpiryDate,
      sinceDate,
      stateOfIssuance,
      alRishaCharges,
      salaryType,
      receivableFromCareem,
      payableToVendor,
      employeeStatus,
      passportReceived,
      passportReturned,
      laborCardNo,
      cardIssue,
      cardExpiry,
      careemId,
      shiftTime,
      phoneNumber,
      jobType,
      carType,
      emergenceNo,
      employerName,
      employerPosition,
      employerContact,
      employerCity,
      employerNOCStatus,
      dateOfEmployment,
      granterName,
      granterJobAddress,
      granterHomeAddress,
      granterResidentialAddress,
      granterRelationWithDA,
      granterPhoneNumber,
      granterPhone,
      granterCountry,
      granterHomeTown,
      granterOccupation,
      granterHomeHeadName,
      granterFamilyHeadOccupation,
      country,
      homeAddress,
      homeTownCity,
      familyHeadName,
      familyHeadPhoneNumber,
      familyHeadOccupation,
      applicantSignatureAndDate,
    } = req.body;
    
    // if (
    //   !companyName ||
    //   !vendorName ||
    //   !project || // This was missing
    //   !emiratesId ||
    //   !joiningDate ||
    //   !firstName ||
    //   !lastName ||
    //   !currentAddress ||
    //   !nationality ||
    //   !gender ||
    //   !email ||
    //   !dob ||
    //   !foreignBankAcc ||
    //   !nativeBankAcc ||
    //   !passportNo ||
    //   !passportIssueDate ||
    //   !passportExpiryDate ||
    //   !driverLicense ||
    //   !licenseIssueDate ||
    //   !licenseExpiryDate ||
    //   !sinceDate ||
    //   !stateOfIssuance ||
    //   !alRishaCharges ||
    //   !salaryType ||
    //   !receivableFromCareem ||
    //   !payableToVendor ||
    //   !employeeStatus ||
    //   !passportReceived ||
    //   !passportReturned ||
    //   !laborCardNo ||
    //   !cardIssue ||
    //   !cardExpiry ||
    //   !emiratesIdFormat ||
    //   !shiftTime ||
    //   !phoneNumber ||
    //   !jobType ||
    //   !carType ||
    //   !emergenceNo ||
    //   !employerName ||
    //   !employerPosition ||
    //   !employerContact ||
    //   !employerCity ||
    //   !employerNOCStatus ||
    //   !dateOfEmployment ||
    //   !granterName ||
    //   !granterJobAddress ||
    //   !granterHomeAddress ||
    //   !granterResidentialAddress ||
    //   !granterRelationWithDA ||
    //   !granterPhoneNumber ||
    //   !granterPhone ||
    //   !granterCountry ||
    //   !granterHomeTown ||
    //   !granterOccupation ||
    //   !granterHomeHeadName ||
    //   !granterFamilyHeadOccupation ||
    //   !country ||
    //   !homeAddress ||
    //   !homeTownCity ||
    //   !familyHeadName ||
    //   !familyHeadPhoneNumber ||
    //   !familyHeadOccupation ||
    //   !applicantSignatureAndDate
    // ) {
    //   return res.status(404).json({
    //     statusCode: STATUS_CODES[404],
    //     message: "Required fields are missing, please add all required fields",
    //   });
    // }
    const avatar = req.file ? req.file.path : null;
    if (!avatar) {
      return res.status(400).json({
        statusCode: STATUS_CODES[400],
        message: "EmployeeAvatar is missing!",
      });
    }
    const newEmployeeDetails = await new employeeModel({
      employeeId,
      companyName,
      vendorName,
      project, // This was missing
      avatar,
      emiratesId,
      joiningDate,
      firstName,
      lastName,
      currentAddress,
      nationality,
      gender,
      email,
      dob,
      foreignBankAcc,
      nativeBankAcc,
      passportNo,
      passportIssueDate,
      passportExpiryDate,
      driverLicense,
      licenseIssueDate,
      licenseExpiryDate,
      sinceDate,
      stateOfIssuance,
      alRishaCharges,
      salaryType,
      receivableFromCareem,
      payableToVendor,
      employeeStatus,
      passportReceived,
      passportReturned,
      laborCardNo,
      cardIssue,
      cardExpiry,
      careemId,
      shiftTime,
      phoneNumber,
      jobType,
      carType,
      emergenceNo,
      employerName,
      employerPosition,
      employerContact,
      employerCity,
      employerNOCStatus,
      dateOfEmployment,
      granterName,
      granterJobAddress,
      granterHomeAddress,
      granterResidentialAddress,
      granterRelationWithDA,
      granterPhoneNumber,
      granterPhone,
      granterCountry,
      granterHomeTown,
      granterOccupation,
      granterHomeHeadName,
      granterFamilyHeadOccupation,
      country,
      homeAddress,
      homeTownCity,
      familyHeadName,
      familyHeadPhoneNumber,
      familyHeadOccupation,
      applicantSignatureAndDate,
    }).save();
    return res.status(200).json({
      statusCode: STATUS_CODES[200],
      message: `${newEmployeeDetails.firstName} details are added into the database successfully`,
    });
  } catch (error) {
    res.status(500).json({
      statusCode: STATUS_CODES[500],
      message: error.message,
    });
  }
};

exports.loadAllEmployeesDetails = async (req, res) => {
  try {
    const emplyeesDetailsData = await employeeModel.find();
    if (emplyeesDetailsData.length === 0) {
      return res.status(404).json({
        statusCode: STATUS_CODES[404],
        message: "No employee detail in database, please add details",
      });
    }
    return res.status(200).json({
      statusCode: STATUS_CODES[200],
      emplyeesDetailsData,
    });
  } catch (error) {
    res.status(500).json({
      statusCode: STATUS_CODES[500],
      message: error.message,
    });
  }
};
