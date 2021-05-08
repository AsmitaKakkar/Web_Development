//print hello world to the console
//console.log("Hello World");


//adding two numbers 
/*
let a=10;
let b=20;
let result=a+b;
console.log(result);*/


//adding two numbers entered by the user itself
//incomplete***************

//let num1=prompt("Enter first number!!");


//to find square root of a number
/*let a=16;
let result=Math.sqrt(a);
console.log(result);
*/


//calculate the area of a triangle when base and height is known
/*let base=12;
let height=10;
let result=(1/2)*base *height;
console.log("the area of a triangle is : " +result);*/


//calculate the area of a triangle when all the three sides are known
/*let side1=10;
let side2=20;
let side3=20;
let s=(side1+side2+side3)/2;

let result=Math.sqrt(s*(s-side1)*(s-side2)*(s-side3));
console.log("Area of triangle is : "+result);*/


//to swap two numbers
/*let a=2;
let b=3;
let temp;
console.log("Numbers before swapping :- "+ "a ="+ a+ " b = "+b);

temp=a;
a=b;
b=temp;
console.log("Numbers after swapping :- "+ "a = "+a +" b = "+b);
*/


//to swap two numbers using destructing assignment(es6)
/*let a=10;
let b=20;
console.log("Numbers before swapping :- "+"a = "+a+" b = "+b);
[a,b]=[b,a];
console.log("Numbers after swapping :- "+"a = "+a+" b = "+b);*/

//to swap two numbers using arithmatic operations
/*let a=194;
let b=276;
console.log("Numbers before swapping :- "+"a = "+a+" b="+b);

a=a-b;
b=a+b;
a=b-a;
console.log("Numbers after swapping :- "+"a = "+a+" b = "+b);
*/

//program to splve quadratic equations
/*let a=2;
let b=3;
let c=4;
let discriminant=(b*b)-4*a*c;

if(discriminant>0)
{
    let root1=-b/(2*a)+Math.sqrt(discriminant);
    let root2=-b/(2*a)-Math.sqrt(discriminant);
    console.log("root1 = "+root1,"root2 = "+root2);
}
else if (discriminant==0)
{
    root1=root2=-b/2*a;
    console.log("root1 = "+root1,"root2 = "+root2);
}
else{
    let real_part=-b/(2*a);
    let imag_part=Math.sqrt(-discriminant)/(2*a);
    console.log("real_part = "+real_part,"imag_part = "+imag_part);
}*/



//to check a number is positive negative or zero
/*let num=-67; //any number we can get from the user
if(num>0)
{
    console.log(num + " is a positive number !!");
}
else if (num<0)
{
    console.log(num + " is a negative number !!");
}
else 
{
    console .log (num + " is zero !!");
}*/


