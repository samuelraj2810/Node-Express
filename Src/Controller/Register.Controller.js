const ModelReg = require("../Model/Register.Model");
const RegController = async (req, res) => {
  try {
    let data = {
      ...req.body,
      Created: "Success"
    }
    let Register = await ModelReg.create(data);
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
