let maximum=parseInt(prompt("Enter a maximum number !!"));

while(!maximum)
{
    maximum=parseInt(prompt("Enter the valid number !!"));

}

console.log("maximum = "+maximum);

console.log(`maximum number = ${maximum}`);
const targetNum=Math.floor(Math.random()*maximum)+1;
console.log(targetNum);

let guess=parseInt(prompt("Enter you first guess !!"));
let count =1;

while(parseInt(guess)!==targetNum)
{
    if(guess ==='q')
    break;

    if(guess>targetNum)
    {
        guess=prompt("Too high !! Guess another number !!");
        count ++;
    }
    else{
        guess=prompt("Too low !! Guess another number !!");
        count++;
    }

}
if(guess==='q')
{
    console.log("Okay so you are quitting !!");
}
else
{
    console.log("CONGRATULATIONS !! You got it !!");
    console.log(`It took you ${count} guesses !!`);
}
