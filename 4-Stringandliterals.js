html = "<p>this is paragraph</p>" + "<h>This is heading</h>";
console.log(html.endsWith(">")); //it show boolean true or false whether string ends with it or not
console.log(html.includes("this")); //it shoes whether the string contain this or not
console.log(html.charAt(4)); //it shows that what character will be at index 4
console.log(html.lastIndexOf("p")); //it shows what is the last occurance of the element
console.log(html.substring(0, 3)); //3 will be excluded
console.log(html.slice(-4)); //slice can take negative aurgument but subtring cannot
console.log(html.split(" ")); //what ypu specify in brackets it will be shown in array form
//template literals
let var1 = "Pakistan";
let var2 = "Zindabad";
console.log(var1 + " " + var2); //using normal string concatenation
console.log(`${var1}  ${var2}`); //using template literals no string break

console.log(html.charAt(2));
console.log(html.indexOf("p"));
console.log(html.endsWith("a"));
