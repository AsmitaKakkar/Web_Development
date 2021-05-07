/*function repeatStringNumTimes(str, num) {
    let repeatString=[""];
  while(num>0)
  {
    repeatString+=str;
    console.log(str);
    num--;
  }
  return repeatString;
}

repeatStringNumTimes("abc", 3);*/



let fact=1;
function factorialize(num) {
for(let i=1;i<=num;i++)
{
  fact=fact*i;
  
}
console.log(fact);
  return fact;
}

factorialize(5);