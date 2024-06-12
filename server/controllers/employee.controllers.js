const { STATUS_CODES } = require("http");
const employeeModel = require("../models/employee.models");

exports.addEmployeeDetails = async (req, res) => {
  try {
    const {
      emFirstName,
      emLastName,
      emCurrentAddress,
      emSince,
      emDOB,
      emNativeCountry,
      emGender,
      emPhone,
      emBankAccount,
      emBankAccountNative,
      emDrivingLicense,
      emStateOfIssuance,
      emLicenseIssueDate,
      emLicenseExpiryDate,
      emEmail,
      emEmiratesId,
      emPassportNo,
      emPassportExpiry,
      emEmergence,
      emFixSalary,
      alRishaChargesManual,
      receiveableFromCareem,
      payableToVender,
    } = req.body;

    if (
      !emFirstName ||
      !emLastName ||
      !emCurrentAddress ||
      !emSince ||
      !emDOB ||
      !emNativeCountry ||
      !emGender ||
      !emPhone ||
      !emBankAccount ||
      !emBankAccountNative ||
      !emDrivingLicense ||
      !emStateOfIssuance ||
      !emLicenseIssueDate ||
      !emLicenseExpiryDate ||
      !emEmail ||
      !emEmiratesId ||
      !emPassportNo ||
      !emPassportExpiry ||
      !emEmergence ||
      !emFixSalary ||
      !alRishaChargesManual ||
      !receiveableFromCareem ||
      !payableToVender
    ) {
      return res.status(404).json({
        statusCode: STATUS_CODES[404],
        message: "Required fields are missing, please add all required fields",
      });
    }
    const emEmailExisted = await employeeModel.findOne({ emEmail });
    if (emEmailExisted) {
      return res.status(409).json({
        statusCode: STATUS_CODES[409],
        message: `${emEmailExisted} is already existed into the database, please add unique email`,
      });
    }
    const emEmiratesIdExisted = await employeeModel.findOne({ emEmiratesId });
    if (emEmiratesIdExisted) {
      return res.status(409).json({
        statusCode: STATUS_CODES[409],
        message: `${emEmiratesIdExisted} is already existed into the database, please add unique emEmiratesId`,
      });
    }
    const newEmployeeDetails = await new employeeModel({
      emFirstName,
      emLastName,
      emCurrentAddress,
      emSince,
      emDOB,
      emNativeCountry,
      emGender,
      emPhone,
      emBankAccount,
      emBankAccountNative,
      emDrivingLicense,
      emStateOfIssuance,
      emLicenseIssueDate,
      emLicenseExpiryDate,
      emEmail,
      emEmiratesId,
      emPassportNo,
      emPassportExpiry,
      emEmergence,
      emFixSalary,
      alRishaChargesManual,
      receiveableFromCareem,
      payableToVender,
    }).save();
    return res.status(200).json({
      statusCode: STATUS_CODES[200],
      message: `${newEmployeeDetails.emFirstName} details are added into the database successfully`,
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
