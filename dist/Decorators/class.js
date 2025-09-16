"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
@addEmploymentDateOnPrototype
@addEmploymentDate
class Manager {
    task = 'Simple Task';
    project = 'Simple Project';
    constructor() {
        console.log('Initializing Manager');
    }
}
function addEmploymentDateOnPrototype(initialValue, context) {
    initialValue.prototype.employmentDate = new Date().toISOString();
}
// generic for a constructor function - T extends { new (...args: any[]): {} }
function addEmploymentDate(baseClass, context) {
    return class extends baseClass {
        employmentDate = new Date().toISOString();
        constructor(...args) {
            super(...args);
            console.log('Adding employment date to', baseClass.name);
        }
    };
}
const manager = new Manager();
console.log(manager);
console.log(manager.__proto__);
//# sourceMappingURL=class.js.map