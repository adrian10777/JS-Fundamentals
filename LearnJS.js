// single line comment
/*
multi line
*/

// funcitons are called in the same manner: function_name(inputs)


//print()
console.log('Hello World');

// to run a js file in your command prompt/terminal
//$ node filename.js
//after installing node (and adding to your PATH variables)

//PATH is an environment variable
//Path variable specifies a set of diretoties or files folder within your os that control certain scripts

// basic types in JS
// aka primitive types in JS
// strings (same as py)
// booleans (almost same as python)
// numeric (encompasses both int and floats)

// variable def and declaration
var animal_name = 'Fennec Fox';

/* in js - indentation does not matter aka whitespace
*most of the time
why?
JS is a compiled language, python is an interpreted language
in an interpreted language, the computer does all the work at urun time this means the code that we write is actully  the computer reads/translates.
In a compiled language, the cpu does some of the work before runtime at the compiled stage, this means what we write isnt exactly what the cpu reads
a compiler does some translation before the cpu reads the code. the compiler removes all whitespace

in py we contorl line endings with a new line (hitting enter). we control code blocks with indentation and colons (gitting tab)
in js we control line endings with semicolons and we control code blocks with {}


*/

if (true){
    console.log('his is inside of the if statements codeblock. it is inside the curly brackets');
}
console.log('This is outside of the if statements code block');
console.log('\n\n');
// whats going on with var?
// we need to tell the computer that we are making a variable before we make it
//so instead of x =3
// var x = 3;

//this can be split in 2 steps, var declaration and var definition
var x; // this is variable declaration - we told the computer that a variable named x should exist (not in py)

x = 3; // this is vr defininition = we are telling the cpu what value a previously declared variable should have 
console.log(x); // declared but not defined => undefined
// of course we can combine these steps in 1 line
var y = 5;
//after defined^ not undefined anymore

// u must declare your variables
z = 7; // definition without declaration (using var) is bad practice - creates a variable associated with a specific global obj that can cause weird and unexpected errors
console.log(z);

// string are just like string in py
var my_string = 'Hello';
console.log(my_string);

// typeof keyword - similar to pythons type()
console.log(typeof my_string);

// booleans - same as py -hold either true or false
// diff is booleans in js are lowercase instead of uppercase
var bool1 = true;
var bool2 = false;
console.log(typeof bool1,bool2);

// numeric data type (encompasses both ints and floats)
var num1 = 4;
console.log(typeof num1, num1)

var num2 = 4.0;
console.log(typeof num2, num2);


/*
pythons - 2 most commonly used data structures: list and dicts
Js - has arrays (same as list) and simple objs (same as dict)
*/

// array

var some_array = [4, 'hello', 5, 'yo'];
console.log(typeof some_array, some_array);

// simple obj - {} just like a python dict - key/value pairs just like py dict
var my_simple_obj = {'one': 1, 'two': 2}; //keys always str
console.log(typeof my_simple_obj, my_simple_obj);

/* quick aside about var def and declaration - VARIABLE HOISTING
variable hoisting is an auto process during compiling that brings all var declarations to thefront of the JS to be executed
aka var declarations will run before any of your other code
*/
console.log(my_hoisting_example);
var my_hoisting_example = "why is this message not console logging";

//specific ex of hoisting allowing us to avoid an error:
var y2 = -5;
if (y2 > 0);{
    var x1 = y2+1;
}
if (x1 == undefined){
    console.log('no error, thanks hoisting');
}

// basic math operations

// addition, subtraction, multiplication, exponents are all same
var sum = 7.0 + 8;
console.log(typeof sum, sum);
var subtracted = 7.0 - 0;

var multiplied = 7*0;

var exponents = 8**2;

var division = 7/8;
console.log(typeof division, division);



console.log(typeof exponents, exponents);

var modulo = 7%2;
console.log(typeof modulo, modulo);

//floor division in py is done with //, in js we use Math.floor() and normal division
var floor_div = Math.floor(7/2);
console.log(typeof floor_div, floor_div);

//other math conversions -> 
//Math.floor() rounds down to the nearest int,
//Math.ceil() rounds up to the nearest int, 
//Math.round() does normal rounding

var rounded = 3.5;
console.log(Math.floor(rounded));

/* JS mind bender #1
what happens if we add a str to an int?

*/

var int1 = 1;
var str1 = 'bagel';
console.log(int1 + str1);
// 1 bagel? automatic type conversion (Reason some ppl love js, also might hate)
// when the cpu is compliling this code its seeing int + str, and it recognizes it cant happen, it converts int to a str and adds both str together

var result1 = int1 + str1;
console.log(typeof result1, result1);

// the int1 is being converted to str so that it can be added to the other str with normal str concatenation (sam s pythn adding 2 str)
// other examples of weired JS auto type conversion
console.log(undefined + 0);
console.log(undefined + []);
console.log(0 + []);
console.log(true + undefined); //NaN = Not A Number
console.log(false + 0);
console.log(null + true); //Null = None(python)
// dynamic typing = novar type cannot be changed

// ok - some of this system is a little too flexible
// what can we do to imporve it? constant ? when it comes to JS for developers all over the world
// 2 most popular solutions nowadays
// 1. write ES6 aka EcmaScript6 - modern standardization JS (which compiles right back to vanilla JS)
    // this is what we will be doing mostly^
//2. write TypeScript - modern alternative to JS more its own language, but still compiles right back to vanilla JS
    //TS written by MIcrosoft devs who got tired of JS automatic conversions and type flexibility
    // same as JS just with static typing

// bigges diff with ES6 is the way we do var declaration/definition
// in ES6 we dont use VAR we use LET AND CONST
//let is most commonly used for variable declaration

let animal1; //declaration with let - a va declared with let cannot be redeclared
//let animal1; -> error if declared again, var allows u to redeclare

// Let allows you to redefine the variable
animal1 = 5;
animal1 = 'fennec fox';

// const also does not allow u to redeclare
// no redeclaration or redefinition

// var redeclaration and redefinintion
// let redefinition no redeclaration

