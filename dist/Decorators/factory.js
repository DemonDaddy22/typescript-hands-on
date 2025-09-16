"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Manager {
    @addTask({ name: 'Simple Task', level: 'easy' })
    tasks = [];
    constructor() {
        console.log('Initializing Manager');
    }
}
function addTask(task) {
    return function (initialValue, context) {
        return (args) => {
            args.push(task);
            return args;
        };
    };
}
const manager = new Manager();
console.log(manager);
//# sourceMappingURL=factory.js.map