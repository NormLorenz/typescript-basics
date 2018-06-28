
// typed function declaration
let sumOrder: (price: number, quantity: number) => number;
sumOrder = (x, y) => x * y;
const sum = sumOrder(25, 2);
console.log(`total sum: ${sum}`);

// optional typed function declaration
let sumOrder2: (price: number, quantity?: number) => number;
sumOrder2 = (x, y = 1) => x * y;
const sum2 = sumOrder2(25);

// working with objects
let pizza: { name: string, price: number, getName(): string } = {
  name: 'plain old pepperoni',
  price: 20,
  getName() {
    return pizza.name;
  }
};
console.log(pizza.getName());

// arrays
const sizes: string[] = ['small', 'medium', 'large'];

// generics
let toppings: string[];
toppings = ['pepperoni', 'tomato', 'bacon'];

let cars: Array<string>;
cars = ['chevrolet', 'ford', 'hudson'];

// tuples
let tool: [string, number, boolean];
tool = ['wrench', 20, true];

// type aliases
type Size = 'small' | 'medium' | 'large';
type Callback = (size: Size) => void;
let pizzaSize: Size = 'small';
const selectSize: Callback = (x) => {
  pizzaSize = x;
}
selectSize('small');

// type assertions
type Animal = { name: string, hasFur: boolean, legs: number };
const animal: Animal = { name: 'cat', hasFur: true, legs: 4 };
const serialized = JSON.stringify(animal);

function getNameFromJSON(obj: string) {
  return (JSON.parse(obj) as Animal).name;
}

getNameFromJSON(serialized);

// interfaces
interface Truck {
  name: string;
  sizes: string[];
};

interface Trucks {
  data: Truck
}

function createTruck(name: string, sizes: string[]): Truck {
  return {
    name,
    sizes,
  }
}

const truck = createTruck('Dodge', ['small', 'medium']);
