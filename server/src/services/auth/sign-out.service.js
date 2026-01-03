import createError from "http-errors";
const signOut = (sessionId) => {
  console.log(`Signing out session: ${sessionId}`);

  if (!sessionId) {
    throw createError(400, "Invalid session ID");
  }
  return Promise.resolve(true);
};

export default signOut;
