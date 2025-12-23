import bcrypt from "bcrypt";

const passwordHash = async (password) => {
  // Simple hash function for demonstration purposes
  let hash = 5;
  const encryptPayload = await bcrypt.hashSync(password, hash, (err, hash) => {
    if (err) {
      console.error("Error hashing password:", err);
      return null;
    }
    console.log("Hashed password:", hash);
  });

  return encryptPayload;
};

export default passwordHash;
