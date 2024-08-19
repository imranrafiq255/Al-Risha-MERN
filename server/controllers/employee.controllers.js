const { STATUS_CODES } = require("http");
const employeeModel = require("../models/employee.models");
const companyModel = require("../models/company.models");
const projectModel = require("../models/project.models");
const guarantorModel = require("../models/guarantor.models");
const jobTypeModel = require("../models/jobType.models");
const nationalityModel = require("../models/nationality.models");
const nocStatusModel = require("../models/nocStatus.models");
const salaryTypeModel = require("../models/salaryType.models");
const shiftTimeModel = require("../models/shiftTime.models");
const vehicleTypeModel = require("../models/vehicleType.models");
const stateOfIssuanceModel = require("../models/stateOfIssuance.models");

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
    const updateData = {};
    for (let key in data) {
      if (data.hasOwnProperty(key) && data[key] !== null && data[key] !== "") {
        updateData[key] = data[key];
      }
    }
    const updatedCompany = await companyModel.findByIdAndUpdate(
      id,
      updateData,
      {
        new: true,
      }
    );

    if (!updatedCompany) {
      return res.status(404).json({
        statusCode: STATUS_CODES[404],
        message: "Company not found!",
      });
    }

    return res.status(200).json({
      statusCode: STATUS_CODES[200],
      message: "Company record is updated successfully",
      data: updatedCompany,
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

// Guarantor
exports.addGuarantor = async (req, res) => {
  try {
    const {
      guarantorId,
      guarantorName,
      guarantorPhoneNumber,
      guarantorResidentialAddress,
      guarantorOccupation,
      guarantorJobAddress,
      guarantorRelationWithDA,
      guarantorStatus,
    } = req.body;
    const newGuarantor = await new guarantorModel({
      guarantorId,
      guarantorName,
      guarantorPhoneNumber,
      guarantorResidentialAddress,
      guarantorOccupation,
      guarantorJobAddress,
      guarantorRelationWithDA,
      guarantorStatus,
    }).save();
    return res.status(201).json({
      statusCode: STATUS_CODES[201],
      message: `${newGuarantor.guarantorName} is added successfully!`,
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: STATUS_CODES[500],
      message: error.message,
    });
  }
};
exports.deleteGuarantorById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(404).json({
        statusCode: STATUS_CODES[404],
        message: "Id parameter is missing!",
      });
    }
    const guarantor = await guarantorModel.findOne({ _id: id });
    if (!guarantor) {
      return res.status(404).json({
        statusCode: STATUS_CODES[404],
        message: "No, guarantor found with given id!",
      });
    }
    await guarantorModel.findByIdAndDelete({ _id: id });
    return res.status(200).json({
      statusCode: STATUS_CODES[200],
      message: `${guarantor.guarantorName} is deleted successfully!`,
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: STATUS_CODES[500],
      message: error.message,
    });
  }
};
exports.updateGuarantorById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(404).json({
        statusCode: STATUS_CODES[404],
        message: "Id parameter is missing!",
      });
    }
    const data = req.body;
    const updateData = {};
    for (let key in data) {
      if (data.hasOwnProperty(key) && data[key] !== null && data[key] !== "") {
        updateData[key] = data[key];
      }
    }
    const updatedGuarantor = await guarantorModel.findByIdAndUpdate(
      id,
      updateData,
      {
        new: true,
      }
    );

    if (!updatedGuarantor) {
      return res.status(404).json({
        statusCode: STATUS_CODES[404],
        message: "Guarantor not found!",
      });
    }
    return res.status(200).json({
      statusCode: STATUS_CODES[200],
      message: "Guarantor record is updated successfully",
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: STATUS_CODES[500],
      message: error.message,
    });
  }
};
exports.loadAllGuarantors = async (req, res) => {
  try {
    const guarantors = await guarantorModel.find();
    return res.status(200).json({
      statusCode: STATUS_CODES[200],
      guarantors,
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: STATUS_CODES[500],
      message: error.message,
    });
  }
};

// Job type

exports.addJobType = async (req, res) => {
  try {
    const { jobTypeId, jobTypeName, jobTypeStatus } = req.body;
    const newJobType = await new jobTypeModel({
      jobTypeId,
      jobTypeName,
      jobTypeStatus,
    }).save();
    return res.status(201).json({
      statusCode: STATUS_CODES[201],
      message: `${newJobType.jobTypeName} is added successfully!`,
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: STATUS_CODES[500],
      message: error.message,
    });
  }
};
exports.deleteJobTypeById = async (req, res) => {
  try {
    const id = req.params.id;

    if (!id) {
      return res.status(404).json({
        statusCode: STATUS_CODES[404],
        message: "Id parameter is missing!",
      });
    }
    const jobType = await jobTypeModel.findOne({ _id: id });
    if (!jobType) {
      return res.status(404).json({
        statusCode: STATUS_CODES[404],
        message: "No, job type found with given id!",
      });
    }
    await jobTypeModel.findByIdAndDelete({ _id: id });
    return res.status(200).json({
      statusCode: STATUS_CODES[200],
      message: `${jobType.jobTypeName} is deleted successfully!`,
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: STATUS_CODES[500],
      message: error.message,
    });
  }
};
exports.updateJobTypeById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(404).json({
        statusCode: STATUS_CODES[404],
        message: "Id parameter is missing!",
      });
    }
    const data = req.body;
    const updateData = {};
    for (let key in data) {
      if (data.hasOwnProperty(key) && data[key] !== null && data[key] !== "") {
        updateData[key] = data[key];
      }
    }
    const updatedJobType = await jobTypeModel.findByIdAndUpdate(
      id,
      updateData,
      {
        new: true,
      }
    );

    if (!updatedJobType) {
      return res.status(404).json({
        statusCode: STATUS_CODES[404],
        message: "Job type not found!",
      });
    }
    return res.status(200).json({
      statusCode: STATUS_CODES[200],
      message: "Job type record is updated successfully",
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: STATUS_CODES[500],
      message: error.message,
    });
  }
};
exports.loadAllJobTypes = async (req, res) => {
  try {
    const jobTypes = await jobTypeModel.find();
    return res.status(200).json({
      statusCode: STATUS_CODES[200],
      jobTypes,
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: STATUS_CODES[500],
      message: error.message,
    });
  }
};

// Nationality
exports.addNationality = async (req, res) => {
  try {
    const { nationalityId, nationality, nationalityStatus } = req.body;
    const newNationality = await new nationalityModel({
      nationalityId,
      nationality,
      nationalityStatus,
    }).save();
    return res.status(201).json({
      statusCode: STATUS_CODES[201],
      message: `${newNationality.nationality} is added successfully!`,
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: STATUS_CODES[500],
      message: error.message,
    });
  }
};
exports.deleteNationalityById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(404).json({
        statusCode: STATUS_CODES[404],
        message: "Id parameter is missing!",
      });
    }
    const nationality = await nationalityModel.findOne({ _id: id });
    if (!nationality) {
      return res.status(404).json({
        statusCode: STATUS_CODES[404],
        message: "No, nationality found with given id!",
      });
    }
    await nationalityModel.findByIdAndDelete({ _id: id });
    return res.status(200).json({
      statusCode: STATUS_CODES[200],
      message: `${nationality.nationality} is deleted successfully!`,
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: STATUS_CODES[500],
      message: error.message,
    });
  }
};
exports.updateNationalityById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(404).json({
        statusCode: STATUS_CODES[404],
        message: "Id parameter is missing!",
      });
    }
    const data = req.body;
    const updateData = {};
    for (let key in data) {
      if (data.hasOwnProperty(key) && data[key] !== null && data[key] !== "") {
        updateData[key] = data[key];
      }
    }
    const updatedNationality = await nationalityModel.findByIdAndUpdate(
      id,
      updateData,
      {
        new: true,
      }
    );
    if (!updatedNationality) {
      return res.status(404).json({
        statusCode: STATUS_CODES[404],
        message: "Nationality not found!",
      });
    }
    return res.status(200).json({
      statusCode: STATUS_CODES[200],
      message: "Nationality record is updated successfully",
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: STATUS_CODES[500],
      message: error.message,
    });
  }
};
exports.loadAllNationalities = async (req, res) => {
  try {
    const natiionities = await nationalityModel.find();
    return res.status(200).json({
      statusCode: STATUS_CODES[200],
      natiionities,
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: STATUS_CODES[500],
      message: error.message,
    });
  }
};

// NOC Status
exports.addNOCStatus = async (req, res) => {
  try {
    const { nocId, nocStatus, nocDetails } = req.body;
    const newNocStatus = await new nocStatusModel({
      nocId,
      nocStatus,
      nocDetails,
    }).save();
    return res.status(201).json({
      statusCode: STATUS_CODES[201],
      message: `NOC Status is added successfully!`,
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: STATUS_CODES[500],
      message: error.message,
    });
  }
};
exports.deleteNOCStatusById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(404).json({
        statusCode: STATUS_CODES[404],
        message: "Id parameter is missing!",
      });
    }
    const nocStatus = await nocStatusModel.findOne({ _id: id });
    if (!nocStatus) {
      return res.status(404).json({
        statusCode: STATUS_CODES[404],
        message: "No, NOC Status found with given id!",
      });
    }
    await nocStatusModel.findByIdAndDelete({ _id: id });
    return res.status(200).json({
      statusCode: STATUS_CODES[200],
      message: `NOC Status is deleted successfully!`,
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: STATUS_CODES[500],
      message: error.message,
    });
  }
};
exports.updateNOCStatusById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(404).json({
        statusCode: STATUS_CODES[404],
        message: "Id parameter is missing!",
      });
    }
    const data = req.body;
    const updateData = {};
    for (let key in data) {
      if (data.hasOwnProperty(key) && data[key] !== null && data[key] !== "") {
        updateData[key] = data[key];
      }
    }
    const updatedNocStatus = await nocStatusModel.findByIdAndUpdate(
      id,
      updateData,
      {
        new: true,
      }
    );
    if (!updatedNocStatus) {
      return res.status(404).json({
        statusCode: STATUS_CODES[404],
        message: "NOC Status not found!",
      });
    }
    return res.status(200).json({
      statusCode: STATUS_CODES[200],
      message: "NOC Status record is updated successfully",
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: STATUS_CODES[500],
      message: error.message,
    });
  }
};
exports.loadAllNOCStatuses = async (req, res) => {
  try {
    const nocStatuses = await nocStatusModel.find();
    return res.status(200).json({
      statusCode: STATUS_CODES[200],
      nocStatuses,
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: STATUS_CODES[500],
      message: error.message,
    });
  }
};

// Salary Type
exports.addSalaryType = async (req, res) => {
  try {
    const { salaryTypeId, salaryTypeName, salaryTypeStatus } = req.body;
    await new salaryTypeModel({
      salaryTypeId,
      salaryTypeName,
      salaryTypeStatus,
    }).save();
    return res.status(201).json({
      statusCode: STATUS_CODES[201],
      message: `Salary Type is added successfully!`,
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: STATUS_CODES[500],
      message: error.message,
    });
  }
};
exports.deleteSalaryType = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(404).json({
        statusCode: STATUS_CODES[404],
        message: "Id parameter is missing!",
      });
    }
    const salaryType = await salaryTypeModel.findOne({ _id: id });
    if (!salaryType) {
      return res.status(404).json({
        statusCode: STATUS_CODES[404],
        message: "No, Salary Type found with given id!",
      });
    }
    await salaryTypeModel.findByIdAndDelete({ _id: id });
    return res.status(200).json({
      statusCode: STATUS_CODES[200],
      message: `Salary Type is deleted successfully!`,
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: STATUS_CODES[500],
      message: error.message,
    });
  }
};
exports.updateSalaryTypeById = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(404).json({
        statusCode: STATUS_CODES[404],
        message: "Id parameter is missing!",
      });
    }
    const data = req.body;
    const updateData = {};
    for (let key in data) {
      if (data.hasOwnProperty(key) && data[key] !== null && data[key] !== "") {
        updateData[key] = data[key];
      }
    }
    const updatedSalaryType = await salaryTypeModel.findByIdAndUpdate(
      id,
      updateData,
      {
        new: true,
      }
    );
    if (!updatedSalaryType) {
      return res.status(404).json({
        statusCode: STATUS_CODES[404],
        message: "Salary Type not found!",
      });
    }
    return res.status(200).json({
      statusCode: STATUS_CODES[200],
      message: "Salary Type record is updated successfully",
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: STATUS_CODES[500],
      message: error.message,
    });
  }
};
exports.loadAllSalaryTypes = async (req, res) => {
  try {
    const salaryTypes = await salaryTypeModel.find();
    return res.status(200).json({
      statusCode: STATUS_CODES[200],
      salaryTypes,
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: STATUS_CODES[500],
      message: error.message,
    });
  }
};
// Shift time
exports.addShiftTime = async (req, res) => {
  try {
    const { shiftId, shiftTime, shiftTimeStatus } = req.body;
    await new shiftTimeModel({
      shiftId,
      shiftTime,
      shiftTimeStatus,
    }).save();
    return res.status(201).json({
      statusCode: STATUS_CODES[201],
      message: `Shift Time is added successfully!`,
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: STATUS_CODES[500],
      message: error.message,
    });
  }
};
exports.deleteShiftTime = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(404).json({
        statusCode: STATUS_CODES[404],
        message: "Id parameter is missing!",
      });
    }
    const shiftTime = await shiftTimeModel.findOne({ _id: id });
    if (!shiftTime) {
      return res.status(404).json({
        statusCode: STATUS_CODES[404],
        message: "No, Shift Time found with given id!",
      });
    }
    await shiftTimeModel.findByIdAndDelete({ _id: id });
    return res.status(200).json({
      statusCode: STATUS_CODES[200],
      message: `Shift Time is deleted successfully!`,
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: STATUS_CODES[500],
      message: error.message,
    });
  }
};
exports.updateShiftTime = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(404).json({
        statusCode: STATUS_CODES[404],
        message: "Id parameter is missing!",
      });
    }
    const data = req.body;
    const updateData = {};
    for (let key in data) {
      if (data.hasOwnProperty(key) && data[key] !== null && data[key] !== "") {
        updateData[key] = data[key];
      }
    }
    const updatedShiftTime = await shiftTimeModel.findByIdAndUpdate(
      id,
      updateData,
      {
        new: true,
      }
    );
    if (!updatedShiftTime) {
      return res.status(404).json({
        statusCode: STATUS_CODES[404],
        message: "Shift Time not found!",
      });
    }
    return res.status(200).json({
      statusCode: STATUS_CODES[200],
      message: "Shift Time record is updated successfully",
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: STATUS_CODES[500],
      message: error.message,
    });
  }
};
exports.loadAllShiftTimes = async (req, res) => {
  try {
    const shiftTimes = await shiftTimeModel.find();
    return res.status(200).json({
      statusCode: STATUS_CODES[200],
      shiftTimes,
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: STATUS_CODES[500],
      message: error.message,
    });
  }
};
// Vehicle Type
exports.addVehicleType = async (req, res) => {
  try {
    const { vehicleTypeId, vehicleTypeName, vehicleTypeStatus } = req.body;
    await new vehicleTypeModel({
      vehicleTypeId,
      vehicleTypeName,
      vehicleTypeStatus,
    }).save();
    return res.status(201).json({
      statusCode: STATUS_CODES[201],
      message: `Vehicle Type is added successfully!`,
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: STATUS_CODES[500],
      message: error.message,
    });
  }
};
exports.deleteVehicleType = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(404).json({
        statusCode: STATUS_CODES[404],
        message: "Id parameter is missing!",
      });
    }
    const vehicleType = await vehicleTypeModel.findOne({ _id: id });
    if (!vehicleType) {
      return res.status(404).json({
        statusCode: STATUS_CODES[404],
        message: "No, Vehicle Type found with given id!",
      });
    }
    await vehicleTypeModel.findByIdAndDelete({ _id: id });
    return res.status(200).json({
      statusCode: STATUS_CODES[200],
      message: `Vehicle Type is deleted successfully!`,
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: STATUS_CODES[500],
      message: error.message,
    });
  }
};
exports.updateVehicleType = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(404).json({
        statusCode: STATUS_CODES[404],
        message: "Id parameter is missing!",
      });
    }
    const data = req.body;
    const updateData = {};
    for (let key in data) {
      if (data.hasOwnProperty(key) && data[key] !== null && data[key] !== "") {
        updateData[key] = data[key];
      }
    }
    const updatedVehicleType = await vehicleTypeModel.findByIdAndUpdate(
      id,
      updateData,
      {
        new: true,
      }
    );
    if (!updatedVehicleType) {
      return res.status(404).json({
        statusCode: STATUS_CODES[404],
        message: "Vehicle Type not found!",
      });
    }
    return res.status(200).json({
      statusCode: STATUS_CODES[200],
      message: "Vehicle Type record is updated successfully",
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: STATUS_CODES[500],
      message: error.message,
    });
  }
};
exports.loadVehicleTypes = async (req, res) => {
  try {
    const vehicleTypes = await vehicleTypeModel.find();
    return res.status(200).json({
      statusCode: STATUS_CODES[200],
      vehicleTypes,
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: STATUS_CODES[500],
      message: error.message,
    });
  }
};
// State Of Issuance
exports.addStateOfIssuance = async (req, res) => {
  try {
    const { stateId, stateName, stateStatus } = req.body;
    await new stateOfIssuanceModel({
      stateId,
      stateName,
      stateStatus,
    }).save();
    return res.status(201).json({
      statusCode: STATUS_CODES[201],
      message: `State of Issuance is added successfully!`,
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: STATUS_CODES[500],
      message: error.message,
    });
  }
};
exports.deleteStateOfIssuance = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(404).json({
        statusCode: STATUS_CODES[404],
        message: "Id parameter is missing!",
      });
    }
    const stateOfIssuance = await stateOfIssuanceModel.findOne({ _id: id });
    if (!stateOfIssuance) {
      return res.status(404).json({
        statusCode: STATUS_CODES[404],
        message: "No, State of Issuance found with given id!",
      });
    }
    await stateOfIssuanceModel.findByIdAndDelete({ _id: id });
    return res.status(200).json({
      statusCode: STATUS_CODES[200],
      message: `State of Issuance is deleted successfully!`,
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: STATUS_CODES[500],
      message: error.message,
    });
  }
};
exports.updateStateOfIssuance = async (req, res) => {
  try {
    const id = req.params.id;
    if (!id) {
      return res.status(404).json({
        statusCode: STATUS_CODES[404],
        message: "Id parameter is missing!",
      });
    }
    const data = req.body;
    const updateData = {};
    for (let key in data) {
      if (data.hasOwnProperty(key) && data[key] !== null && data[key] !== "") {
        updateData[key] = data[key];
      }
    }
    const updatedStateOfIssuance = await stateOfIssuanceModel.findByIdAndUpdate(
      id,
      updateData,
      {
        new: true,
      }
    );
    if (!updatedStateOfIssuance) {
      return res.status(404).json({
        statusCode: STATUS_CODES[404],
        message: "State of Issuance not found!",
      });
    }
    return res.status(200).json({
      statusCode: STATUS_CODES[200],
      message: "State of Issuance record is updated successfully",
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: STATUS_CODES[500],
      message: error.message,
    });
  }
};
exports.loadAllStateOfIssuances = async (req, res) => {
  try {
    res.status(200).json({
      statusCode: STATUS_CODES[200],
      states: await stateOfIssuanceModel.find(),
    });
  } catch (error) {
    return res.status(500).json({
      statusCode: STATUS_CODES[500],
      message: error.message,
    });
  }
};
