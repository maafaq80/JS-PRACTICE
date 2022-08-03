//Javascript type conversion and coercion 

//Conversion of number into 
var mynum = String(20);
console.log(" Welcome to my homepage is " + (typeof mynum));

//Conversion of Boolean in to string 
let boo = String(true);
console.log("The data type is " + (typeof boo));

let date = new Date();
console.log("the data type of date is " + (typeof date))


//Conversion of date(object) into String 
let date1 = String(new Date());
console.log("the data type of date is " + (typeof date1))


//conversion of array into String
let arr = String([1, 2, 3, 4, 5]);
console.log(typeof arr);
console.log(arr.length)


//Conversion into string using toString 
var num = 1;
console.log(num);
console.log(num.toString());


//Conversion of String into a number

var str = Number('34');
console.log(str)


///Conversion of String into Number using ParsInt
let str2 = parseInt('4')
console.log(str2)

//Cnversion of tring into float 

let str3 = Number('2.3333333333333333333333')
console.log(str3.toFixed(2));//Tofixed After points how much literals required 

let str4 = parseFloat('2.55555555555')
console.log(str4.toFixed(4));


//Type Coercion  
// : If we want to add one string and one number so javascript automatically convert number to string and concatenate it if you want that string be convert in number and then add it then you can do it with using number or using parseInt 


//default Number to string and then concatenation 
let st = "698";
let nu = 34;
console.log(st + nu);


//Now String to number and then add 

let stq = parseInt("698")
let nub = 34;
console.log(stq + nub)





