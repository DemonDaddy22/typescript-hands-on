"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendEmailToEmployees = exports.createEmployees = exports.createEmployee = exports.generateId = void 0;
const generateId = () => {
    const base = 100000;
    return base + Math.floor(Math.random() * base);
};
exports.generateId = generateId;
const createEmployee = () => {
    return { id: (0, exports.generateId)() };
};
exports.createEmployee = createEmployee;
const createEmployees = (count) => {
    return new Array(count).fill(null).map(exports.createEmployee);
};
exports.createEmployees = createEmployees;
const sendEmailToEmployees = () => {
    const employees = (0, exports.createEmployees)(10);
    employees.forEach(employee => {
        console.log(`Email sent to employee with id: ${employee.id}`);
    });
};
exports.sendEmailToEmployees = sendEmailToEmployees;
(0, exports.sendEmailToEmployees)();
//# sourceMappingURL=employee.js.map