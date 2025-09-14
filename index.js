// Write your solution in this file!

// Sample employee object (for manual testing)
const employee = {
  name: "Prrince",
  streetAddress: "hurlingam"
};

// 1. Non-destructively update employee
function updateEmployeeWithKeyAndValue(emp, key, value) {
  return { ...emp, [key]: value };
}

// 2. Destructively update employee
function destructivelyUpdateEmployeeWithKeyAndValue(emp, key, value) {
  emp[key] = value;
  return emp;
}

// 3. Non-destructively delete key from employee
function deleteFromEmployeeByKey(emp, key) {
  const newEmployee = { ...emp };
  delete newEmployee[key];
  return newEmployee;
}

// 4. Destructively delete key from employee
function destructivelyDeleteFromEmployeeByKey(emp, key) {
  delete emp[key];
  return emp;
}

// Export for testing
module.exports = {
  employee,
  updateEmployeeWithKeyAndValue,
  destructivelyUpdateEmployeeWithKeyAndValue,
  deleteFromEmployeeByKey,
  destructivelyDeleteFromEmployeeByKey
};

