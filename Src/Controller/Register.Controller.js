const ModelReg = require("../Model/Register.Model");
const GeneratePassword = require("../Utils/GeneratePassword")
const Bcrypt = require("bcrypt");
const SendMail = require("../Utils/SendEmail");

const RegController = async (req, res) => {
  try {
    let { Email, Name } = req.body
    const CheckEmail = await ModelReg.findOne({Email})
    if(CheckEmail) {
      return res.status(409).json({Message: "Email already exists...!!"})
    }

    let Password = GeneratePassword(8)
    console.log(Password);

    let HashPassword = await Bcrypt.hash(Password, 10)
    

    let data = {
      ...req.body,
      Password: HashPassword,
      Created: "Success"
    }
    const Register = await ModelReg.create(data);

     await SendMail(Email, Name, Password)

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
