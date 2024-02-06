import bcrypt from "bcryptjs";
const generateHashPassword = async (password) => {
  const hashPassword = await bcrypt.hash(password, 12);
  return hashPassword;
};

const verifyPassword = (password, hashPassword) => {
  const isValid = bcrypt.compare(password, hashPassword);
  return isValid;
};

export { generateHashPassword, verifyPassword };
