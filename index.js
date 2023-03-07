const employee = {
    name: "John Doe",
    streetAddress: "124 A St"
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updatedEmployee = {...employee};
  
    updatedEmployee[key] = value;
  
    return updatedEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    const updatedEmployee = employee;
  
    updatedEmployee[key] = value;
  
    return updatedEmployee;
}

function deleteFromEmployeeByKey(employee, key) {
    const updatedEmployee = {...employee};

    delete updatedEmployee[key];

    return updatedEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    const updatedEmployee = employee;

    delete updatedEmployee[key];

    return updatedEmployee;
}