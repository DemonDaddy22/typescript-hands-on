type Task = {
  name: string;
  level: 'easy' | 'medium' | 'hard';
};

class Manager {
  @addTask({ name: 'Simple Task', level: 'easy' })
  tasks: Task[] = [];

  constructor() {
    console.log('Initializing Manager');
  }
}

function addTask(task: Task) {
  return function <T, V extends Task[]>(initialValue: undefined, context: ClassFieldDecoratorContext<T, V>) {
    return (args: V) => {
      args.push(task);
      return args;
    };
  };
}

const manager = new Manager();
console.log(manager);
