export type Employee = {
  id: number;
};

export const generateId = (): number => {
  const base = 100000;
  return base + Math.floor(Math.random() * base);
};

export const createEmployee = (): Employee => {
  return { id: generateId() };
};

export const createEmployees = (count: number): Array<Employee> => {
  return new Array(count).fill(null).map(createEmployee);
};

export const sendEmailToEmployees = (): void => {
  const employees = createEmployees(10);
  employees.forEach(employee => {
    console.log(`Email sent to employee with id: ${employee.id}`);
  });
};

sendEmailToEmployees();
