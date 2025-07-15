export function standardizeName(name) {
  const [firstName, lastName] = name.split(" ");
  if (!lastName) throw new Error("Please enter your full name.");
  const standardName = `${firstName.slice(0, 1).toUpperCase() + firstName.slice(1).toLowerCase()} ${lastName.slice(0, 1).toUpperCase() + lastName.slice(1).toLowerCase()}`;
  return standardName.split(" ");
}
export function standardizeFirstLast(name) {
  const standardName = `${name.slice(0, 1).toUpperCase() + name.slice(1).toLowerCase()}`;
  return standardName;
}
export function isPasswordValid(pass) {
  const commonPasswords = [
    "123456",
    "password",
    "12345678",
    "qwerty",
    "abc123",
  ];
  let hasUpper = false;
  let hasLower = false;
  let hasNumber = false;
  if (pass.length < 8 || pass.length > 64) {
    return "Password must be at least 8 characters long and must not exceed 64 characters.";
  }
  if (commonPasswords.includes(pass.toLowerCase()))
    return "Password is too common or easy to guess.";
  pass.split("").forEach((value, _) => {
    if (value >= "A" && value <= "Z") hasUpper = true;
    else if (value >= "a" && value <= "z") hasLower = true;
    else if (value >= "0" && value <= "9") hasNumber = true;
  });
  if (!hasLower || !hasUpper || !hasNumber)
    return "Password must include at least a lowercase letter, an uppercase letter and a number.";
  return "valid";
}
