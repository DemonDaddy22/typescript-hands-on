class Manager {
  @watchChange
  accessor task: string = 'Simple Task'; // accessors help to create getter/setter for properties

  project: string = 'Simple Project';

  constructor() {
    console.log('Initializing Manager');
  }
}

// this is called when the class is defined and not when an instance is created
function watchChange<T, V>(
  accessor: {
    get: (this: T) => V;
    set: (this: T, value: V) => void;
  },
  context: ClassAccessorDecoratorContext<T, V>
) {
  return {
    get(this: T) {
      console.log(`Getting ${String(context.name)} value`);
      return accessor.get.call(this);
    },
    set(this: T, value: V) {
      console.log(`Setting ${String(context.name)} to ${value}`);
      accessor.set.call(this, value);
    },
  };
}

const manager = new Manager();
console.log(manager.task);
manager.task = 'Complex Task';
console.log(manager.task);
