// Giriş yapan kullanıcının bilgilerini döner
const meController = async (req, res, next) => {
  console.log("Inside Me Controller");
  try {
    res.status(200).json({
      success: true,
      statusCode: 200,
      message: "Fetched current user info successfully",
      data: {
        name: "John Doe",
        email: "doe@mail.com",
      },
    });
  } catch (error) {
    console.error("Error in Me Controller:", error);
    next(error);
  }
};

export default meController;
