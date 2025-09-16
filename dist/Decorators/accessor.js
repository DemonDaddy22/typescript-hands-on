"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Manager {
    @watchChange
    accessor task = 'Simple Task'; // accessors help to create getter/setter for properties
    project = 'Simple Project';
    constructor() {
        console.log('Initializing Manager');
    }
}
// this is called when the class is defined and not when an instance is created
function watchChange(accessor, context) {
    return {
        get() {
            console.log(`Getting ${String(context.name)} value`);
            return accessor.get.call(this);
        },
        set(value) {
            console.log(`Setting ${String(context.name)} to ${value}`);
            accessor.set.call(this, value);
        },
    };
}
const manager = new Manager();
console.log(manager.task);
manager.task = 'Complex Task';
console.log(manager.task);
//# sourceMappingURL=accessor.js.map