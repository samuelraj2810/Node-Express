
const ModelReg = require("../Model/Register.Model");
const RegController = async(req, res) => {
  try {
    let Register = await ModelReg.create(req.body)
    res.json({
        Register,
        message: "Registration Successful"
    })
  } catch (error) {
    res.json({
      Error: error.message,
    });
  }
};


module.exports = RegController;