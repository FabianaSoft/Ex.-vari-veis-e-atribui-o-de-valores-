// string

const str: string = 'Hello, world!';
console.log(typeof str);

// number

const num: number = 42;
console.log(typeof num);

// boolean

const bool: boolean = true;
console.log(typeof bool);

// null

const nul: null = null;
console.log(typeof nul);

// undefined

const undef: undefined = undefined;
console.log(typeof undef);

//array

const arr: number[] = [1, 2, 3]; 
console.log(typeof arr);

//object

const obj: object = { key: 'value' };   
console.log(typeof obj);

// Enum

enum Direction {
    Up = 1,
    Down,
    Left,
    Right
}
const direcao: Direction = Direction.Up;

console.log(Direction.Up);

