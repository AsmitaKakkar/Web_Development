const numbers=[1,2,3,4,5,6,7,8,9,10];

function print(element)
{
    console.log(element);
}



// We can use for each method in place of this type of function calling !!


// print(numbers[0]);
// print(numbers[1]);
// print(numbers[2]);
// print(numbers[3]);

//For Each 

numbers.forEach(print)

//More commom way to write a function 

console.log("****Even numbers are : ****");

numbers.forEach(function(el){
    if(el%2==0)
    {
        console.log(el);
    }
})