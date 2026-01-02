import createError from "http-errors";

const isVerified = (user) => {
  if (!user) throw createError(400, "User object is required");

  const result = user.isVerified;
  if (!result) throw createError(403, "User is not verified");

  console.log("✅ | User is verified:", user.uid);
  return true;
};
export default isVerified;
