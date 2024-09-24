const ModelReg = require("../Model/Register.Model");
const GeneratePassword = require("../Utils/GeneratePassword")

const RegController = async (req, res) => {
  try {
    let { Email, ...resBody } = req.body
    const CheckEmail = await ModelReg.findOne({Email})
    if(CheckEmail) {
      return res.status(409).json({Message: "Email already exists...!!"})
    }

    let Password = GeneratePassword(8)
    console.log(Password);
    

    let data = {
      ...req.body,
      Password,
      Created: "Success"
    }
    const Register = await ModelReg.create(data);
    res.json({
      Register,
      message: "Registration Successful",
    });
  } catch (error) {
    res.json({
      Error: error.message,
    });
  }
};

module.exports = {
  RegController
};
