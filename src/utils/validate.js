export const checkValidData = (email, password, confirmPassword = null) => {
  const isEmailValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  if (!email || !password) {
    return "Email and Password are required!";
  }

  if (!isEmailValid) {
    return "Email ID is not valid!";
  }

  if (!isPasswordValid) {
    return "Password must be at least 8 characters long, include an uppercase letter, a lowercase letter, and a number.";
  }

  // Only check confirmPassword when provided (Sign-Up)
  if (confirmPassword !== null && password !== confirmPassword) {
    return "Passwords do not match!";
  }

  return null; // No errors
};
