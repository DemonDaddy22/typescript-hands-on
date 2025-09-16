"use strict";
/**
 * Old decorators → (target, key) where target = prototype (for instance fields) and key = property name (string)
 * New decorators → (initialValue, context) where context has metadata like kind, name, access, etc.
 */
Object.defineProperty(exports, "__esModule", { value: true });
class Manager {
    @watchChange
    task = 'Simple Task';
    project = 'Simple Project';
    constructor() {
        console.log('Initializing Manager');
    }
}
// this is called when the class is defined and not when an instance is created
function watchChange(initialValue, context) {
    let property = initialValue;
    // initialiser function, called once when an instance is created for field decorators
    // After that, the normal property assignment takes over, and your dynamically installed getter/setter is overwritten by the field assignment itself
    // To make the getter/setter survive, you need to install it before the instance assigns the initial value. The trick is to use context.addInitializer to hook into instance construction
    context.addInitializer(function () {
        Object.defineProperty(this, context.name, {
            configurable: true,
            enumerable: true,
            get() {
                console.log(`Getting ${String(context.name)}: ${property}`);
                return property;
            },
            set(value) {
                console.log(`Setting ${String(context.name)} from ${property} to ${value}`);
                property = value;
            },
        });
    });
    // Return the initial value so construction works
    return initialValue;
}
const manager = new Manager();
console.log(manager.task);
manager.task = 'Complex Task';
console.log(manager.task);
//# sourceMappingURL=basics.js.map