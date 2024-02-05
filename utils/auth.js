import bcrypt from "bcryptjs";
const generateHashPassword = async (password) => {
  const hashPassword = await bcrypt.hash(password, 12);
  return hashPassword;
};

export { generateHashPassword };
