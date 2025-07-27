const { sendEmail } = require("../services/email.js");

/**
 * Controller function to handle sending an email via API.
 * Expects 'to', 'subject', and 'message' in the request body.
 * @param {object} req - Express request object.
 * @param {object} res - Express response object.
 */
const sendEmailController = async (req, res) => {
  const { sender, body } = req.body;
  // console.log(req.body, "this is the body from client");

  // Basic validation
  // if (!sender || !message) {
  //   return res
  //     .status(400)
  //     .json({ message: "Missing required fields: subject, or message." });
  // }

  try {
    await sendEmail(sender, body);
    res.status(200).json({ message: "success" });
  } catch (error) {
    console.error("Error in sendEmailController:", error);
    res
      .status(500)
      .json({ message: "Failed to send email.", error: error.message });
  }
};

module.exports = { sendEmailController };
