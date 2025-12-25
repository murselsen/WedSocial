import bcrypt from "bcrypt";

const passwordHash = async (password) => {
  // Simple hash function for demonstration purposes
  let hash = 5;
  const encryptPayload = await bcrypt.hashSync(password, hash, (err, hash) => {
    if (err) {
      throw new Error("Error hashing password:", err);
    }
  });

  return encryptPayload;
};

export default passwordHash;
