const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

dotenv.config(); // Load environment variables from .env file

// // Retrieve email credentials from environment variables
const EMAIL_USER = process.env.EMAIL_USER;
const EMAIL_PASS = process.env.EMAIL_PASS;
const EMAIL_SERVICE = process.env.EMAIL_SERVICE || "gmail"; // Default to gmail if not specified

// Create a Nodemailer transporter using SMTP
// const transporter = nodemailer.createTransport({
//   service: "gmail", // e.g., 'gmail', 'outlook', 'hotmail'
//   auth: {
//     user: "new.rs9047@gmail.com",
//     pass: "bzdt azoc fzga ymwe",
//   },
//   // When using 'service', nodemailer automatically sets the correct host, port, and secure settings
// });

const transporter = nodemailer.createTransport({
  service: EMAIL_SERVICE, // e.g., 'gmail', 'outlook', 'hotmail'
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
  // When using 'service', nodemailer automatically sets the correct host, port, and secure settings
});

/**
 * Sends an email using the configured Nodemailer transporter.
 * @param {string} to - Recipient email address.
 * @param {string} subject - Subject of the email.
 * @param {string} text - Plain text content of the email.
 * @returns {Promise<object>} A Promise that resolves with the Nodemailer send mail result.
 */
const sendEmail = async (subject, text) => {
  let message = `${subject}========>>>>>>${text}`;
  try {
    const mailOptions = {
      from: "new.rs9047@gmail.com", // Sender address
      to: "ramgk9047@gmail.com", // List of recipients
      subject: "Test", // Subject line
      text: message, // Plain text body
      // html: '<b>Hello world?</b>' // HTML body (optional)
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent: %s", info.messageId);
    return info; // Return info about the sent email
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error("Failed to send email"); // Re-throw for controller to catch
  }
};
module.exports = { sendEmail };
