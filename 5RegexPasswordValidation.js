export function validate(password) {
// Lookahead uppercase, lowercase, number and find atleast 6 characters upper/lowercase
  return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])[A-Za-z0-9]{6,}$/.test(password);
}