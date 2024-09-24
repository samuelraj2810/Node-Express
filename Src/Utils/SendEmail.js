const NodeMailer = require("nodemailer");

const SendMail = async(Email, Name, Password) => {
  try {
    let Transporter = NodeMailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.Email,
        pass: process.env.Pass,
      },
    });

    let MailSchema = {
      from: process.env.Email,
      to: Email,
      subject: `Welcome to our Club.`,
      text: `Hello ${Name}.This is your Password: ${Password}`,
    };

    await Transporter.sendMail(MailSchema)
    console.log(("Mail Sent Successfully..."));
    
  } catch (error) {
    console.log(`Error: ${error.message}`);
    
  }
};

module.exports = SendMail;
