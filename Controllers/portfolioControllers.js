const nodemailer = require("nodemailer");
const sendgridTransport = require("nodemailer-sendgrid-transport");

// Transport
const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key: process.env.API_SENDGRID,
    },
  })
);

const sendEmailController = async (req, res) => {
  try {
    const { name, email, msg } = req.body;

    // Validation
    if (!name || !email || !msg) {
      return res.status(400).send({
        success: false,
        message: "Please provide all fields",
      });
    }

    // Email render
    await transporter.sendMail({
      to: "amansahoo4567@gmail.com",
      from: "amansahoo4567@gmail.com",
      subject: "Aman Portfolio",
      html: `
        <h5>Details Info<h5>
        <ul>
          <li><p>Name: ${name}</p></li>
          <li><p>Email: ${email}</p></li>
          <li><p>Message: ${msg}</p></li>
        </ul>`,
    });

    return res.status(200).send({
      success: true,
      message: "Your message was sent successfully",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Send Email API error",
      error: error.message,
    });
  }
};

module.exports = { sendEmailController };
