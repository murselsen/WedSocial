const meController = async (req, res, next) => {
  console.log("⚠️ | Inside Me Controller");
  try {
    console.log("✅ | Me Controller | Successful");

    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Fetched current user info successfully",
      data: {
        user: req.user,
        session: req.session,
      },
    });
  } catch (error) {
    console.error("Error in Me Controller:", error);
    next(error);
  }
};

export default meController;
