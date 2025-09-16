class Project {
  budget: number = 900;

  @withBudget(10)
  writeTests() {
    console.log('Writing tests for the project');
  }

  @withBudget(500)
  fixProductionBug() {
    console.log('Fixing production bug');
  }
}

function withBudget(actionBudget: number) {
  return function <T extends { budget: number }>(initialValue: Function, context: ClassMethodDecoratorContext<T>) {
    return function (this: T, ...args: any[]) {
      if (this.budget >= actionBudget) {
        this.budget -= actionBudget;
        initialValue.apply(this, args);
      } else {
        console.log(`Insufficient budget to perform ${String(context.name)}`);
      }
    };
  };
}

const project = new Project();
project.writeTests();
project.fixProductionBug();
project.fixProductionBug();
console.log('Remaining budget:', project.budget);
