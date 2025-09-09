type Name = {
  name: string;
};

function greet(arg: Name) {
  console.log(`Hello ${arg.name}!`);
}

greet({ name: 'TypeScript' });
