const Mongoose = require("mongoose");

const RegSchema = new Mongoose.Schema(
  {
    Name: {
      type: String,
      require: true,
    },
    Email: {
      type: String,
      unique: true,
      require: true,
    },
    Designation: {
      type: String,
      require: true,
      enum: ["Student", "Intern", "Fresher"],
    },
  },
  { timestamps: true }
);
const ModelReg = Mongoose.model("Registeration Data", RegSchema);

module.exports = ModelReg;
