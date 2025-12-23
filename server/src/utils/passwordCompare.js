import bcrypt from "bcrypt";

const passwordCompare = (password, hashedPassword) => {
  const isPasswordCompare = bcrypt.compareSync(
    password,
    hashedPassword,
    (err, result) => {
      if (err) {
        console.error("Error comparing passwords:", err);
        return false;
      }
      console.log("Password comparison result:", result);
      return result;
    }
  );

  return isPasswordCompare;
};

export default passwordCompare;
