@addEmploymentDateOnPrototype
@addEmploymentDate
class Manager {
  task: string = 'Simple Task';

  project: string = 'Simple Project';

  constructor() {
    console.log('Initializing Manager');
  }
}

function addEmploymentDateOnPrototype(initialValue: any, context: ClassDecoratorContext) {
  initialValue.prototype.employmentDate = new Date().toISOString();
}

// generic for a constructor function - T extends { new (...args: any[]): {} }
function addEmploymentDate<T extends { new (...args: any[]): {} }>(baseClass: T, context: ClassDecoratorContext) {
  return class extends baseClass {
    employmentDate = new Date().toISOString();
    constructor(...args: any[]) {
      super(...args);
      console.log('Adding employment date to', baseClass.name);
    }
  };
}

const manager = new Manager();
console.log(manager);
console.log((manager as any).__proto__);
