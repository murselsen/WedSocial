import { deleteSession } from "../../services/session/index.js";
import { deleteUser } from "../../services/user/index.js";

const deleteAccountController = async (req, res, next) => {
  try {
    await deleteSession(req.session._id);
    await deleteUser(req.user._id);

    return res.status(200).json({
      message: "Delete Account Controller reached successfully",
    });
  } catch (error) {
    console.error("❌ | Error in Delete Account Controller:\n", error);
    next(error);
  } finally {
    console.log("⚠️ | Inside Delete Account Controller");
  }
};

export default deleteAccountController;
