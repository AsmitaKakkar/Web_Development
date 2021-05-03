/*let s="hey ! This is asmita kakkar how are you from asmita!!";
let reg=/asmita/g;
let result =reg.exec(s);
console.log(result);
result =reg.exec(s);
console.log(result);*/

/*let teststr="welcometoprogramming";
let testregex=/programming/;
let result=testregex.test(teststr);
console.log(result);
*/

/*let ourstr="regular expressions";
let ourregex=/expressions/;
let result=ourstr.match(ourregex);
console.log(result);
*/

/*let s="hey!! This is asmita kakkar how are you from asmita!!";
let reg=/asmita/;
let result =s.search(reg);
console.log(result);
*/

/*const p = "The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?";
console.log(p.replace("dog", "monkey"));
const regex = /Dog/i;
console.log(p.replace(regex, 'ferret'));
*/


/*let humstr="I’ll hum a song";
let hugstr="bear hug";
let huregex=/hu./;
let result1=huregex.test(humstr);
let result2=huregex.test(hugstr);
console.log(result1,result2);
*/

/*
let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
let r1=bigStr.match(bgRegex);
let r2=bagStr.match(bgRegex);
let r3=bugStr.match(bgRegex);
let r4=bogStr.match(bgRegex);
console.log(r1,r2,r3,r4);*/


/*let A4 = "aaaah";
      let A2 = "aah";
      let multipleA = /a{3,5}h/;
     let r1=multipleA.test(A4);
    let r2= multipleA.test(A2);
console.log(r1,r2);*/


/*let A4 = "haaaah";
let A3 = "haaah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleHA = /ha{3}h/;
let r1=multipleHA.test(A4);
let r2=multipleHA.test(A3);
let r3=multipleHA.test(A100);
console.log(r1,r2,r3);*/


/*let quit = "qu";
let quRegex= /q(?=u)/;
let result=quit.match(quRegex);
console.log(result);
*/


let noquit = "qt";
let qRegex = /q(?!u)/;
let result=noquit.match(qRegex);
console.log(result);
