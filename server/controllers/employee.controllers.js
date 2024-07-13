const { STATUS_CODES } = require("http");
const employeeModel = require("../models/employee.models");
const companyModel = require("../models/company.models");
const projectModel = require("../models/project.models");

exports.addEmployeeDetails = async (req, res) => {
  try {
    const {
      employeeId,
      companyName,
      vendorName,
      project,
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
      project,
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

// Company
exports.addCompany = async (req, res) => {
  try {
    const {
      companyId,
      companyName,
      companyAddress,
      companyPOCName,
      companyPOCEmail,
      companyPOCPhoneNumber,
      companyStatus,
    } = req.body;
    if (
      !companyId ||
      !companyName ||
      !companyAddress ||
      !companyPOCName ||
      !companyPOCEmail ||
      !companyPOCPhoneNumber
    ) {
      return res.status(404).json({
        statusCode: STATUS_CODES[404],
        message:
          "One or more fields are missing!, please make sure to add all fields",
      });
    }
    const newCompany = await companyModel({
      companyId,
      companyName,
      companyAddress,
      companyPOCName,
      companyPOCEmail,
      companyPOCPhoneNumber,
      companyStatus,
    }).save();
    return res.status(201).json({
      statusCode: STATUS_CODES[201],
      message: `${newCompany.companyName} is added successfully!`,
    });
  } catch (error) {
    res.status(500).json({
      statusCode: STATUS_CODES[500],
      message: error.message,
    });
  }
};
exports.loadAllCompanies = async (req, res) => {
  try {
    const companies = await companyModel.find();
    return res.status(200).json({
      statusCode: STATUS_CODES[200],
      companies,
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: STATUS_CODES[500],
      message: error.message,
    });
  }
};
exports.deleteCompanyById = async (req, res) => {
  try {
    const companyId = req?.params?.id;
    if (!companyId) {
      return res.status(404).json({
        statusCode: STATUS_CODES[404],
        message: "Company id parameter is missing!",
      });
    }
    const company = await companyModel.findOne({ _id: companyId });
    if (!company) {
      return res.status(404).json({
        statusCode: STATUS_CODES[404],
        message: "No, company found with given id!",
      });
    }
    await companyModel.findByIdAndDelete({ _id: companyId });
    return res.status(200).json({
      statusCode: STATUS_CODES[200],
      message: `${company.companyName} is deleted successfully`,
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: STATUS_CODES[500],
      message: error.message,
    });
  }
};
exports.updateCompanyById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(404).json({
        statusCode: STATUS_CODES[404],
        message: "Id parameter is missing!",
      });
    }
    const data = req.body;

    await companyModel.findByIdAndUpdate(id, data, {
      new: true,
    });
    return res.status(200).json({
      statusCode: STATUS_CODES[200],
      message: "Company record is updated successfully",
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: STATUS_CODES[500],
      message: error.message,
    });
  }
};

// Project

exports.addProject = async (req, res) => {
  try {
    const data = req.body;
    const newProject = await projectModel({ ...data }).save();
    return res.status(201).json({
      statusCode: STATUS_CODES[201],
      message: `${newProject.projectName} is added succesfully!`,
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: STATUS_CODES[500],
      message: error.message,
    });
  }
};
exports.deleteProjectById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(404).json({
        statusCode: STATUS_CODES[404],
        message: "id parameter is missing!",
      });
    }
    const project = await projectModel.findOne({ _id: id });
    if (!project) {
      return res.status(404).json({
        statusCode: STATUS_CODES[404],
        message: "No, project found with given id!",
      });
    }
    await projectModel.findByIdAndDelete({ _id: id });
    return res.status(200).json({
      statusCode: STATUS_CODES[200],
      message: `${project.projectName} is deleted successfully!`,
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: STATUS_CODES[500],
      message: error.message,
    });
  }
};
exports.updateProjectById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(404).json({
        statusCode: STATUS_CODES[404],
        message: "Id parameter is missing!",
      });
    }
    const data = req.body;

    await projectModel.findByIdAndUpdate(id, data, {
      new: true,
    });
    return res.status(200).json({
      statusCode: STATUS_CODES[200],
      message: "Project record is updated successfully",
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: STATUS_CODES[500],
      message: error.message,
    });
  }
};
exports.loadAllProjects = async (req, res) => {
  try {
    const projects = await projectModel.find().populate("companyName");
    return res.status(200).json({
      statusCode: STATUS_CODES[200],
      projects,
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: STATUS_CODES[500],
      message: error.message,
    });
  }
};
