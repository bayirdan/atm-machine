import bcrypt from "bcrypt";

export const cryptPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

export const comparePassword = async (reqPass: string, userPass: string) => {
  return bcrypt.compare(reqPass, userPass);
};
