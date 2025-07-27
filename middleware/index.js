const check = async (req, res, next) => {
  const { sender, message } = req.body;

  try {
    await sendEmail(sender, message);
    // res.status(200).json({ message: "success" });
    next();
  } catch (error) {
    console.error("Error in sendEmailController:", error);
    res
      .status(500)
      .json({ message: "Failed to send email.", error: error.message });
  }
};
