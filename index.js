// string
var str = 'Hello, world!';
console.log(typeof str);
// number
var num = 42;
console.log(typeof num);
// boolean
var bool = true;
console.log(typeof bool);
// null
var nul = null;
console.log(typeof nul);
// undefined
var undef = undefined;
console.log(typeof undef);
//array
var arr = [1, 2, 3];
console.log(typeof arr);
//object
var obj = { key: 'value' };
console.log(typeof obj);
// Enum
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction[Direction["Left"] = 3] = "Left";
    Direction[Direction["Right"] = 4] = "Right";
})(Direction || (Direction = {}));
var direcao = Direction.Up;
console.log(Direction.Up);
