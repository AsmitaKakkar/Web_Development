// function hello()
// {
//     console.log("Hello");
// }
// try
// {
//     hello.toUpperCase();

// }
// catch{
//         console.log("ERRORRRRRRRRRRRR!!");
// }

// hello.toUpperCase();

    function yell(msg)

    {
        try
        {
            console.log(msg.toUpperCase().repeat(3));
        }
        catch(e){//we can caught the error like this!!
            console.log(e);
            console.log("I am not in a mood of yelling !!");
            console.log("Also please pass the string next time !!");
        }
    }



