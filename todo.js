let element=prompt("What would you want to do ?");

const todos=["Make a pizza","Greet the guests"];

while(element!='quit' && element !=='q')
{
   
    if(element==='new')
    {

        const newTodo =prompt("Okay !! So, what is the new todo ?");
        todos.push(newTodo);
        console.log(`${newTodo} added to the list !!`);

    }
    else if(element==='list')
    {
        console.log("*************************************");
        console.log("           Todo Elements ");
        console.log("**************************************");
        for(let i=0;i<todos.length;i++)
        {
            console.log(`${i} : ${todos[i]}`);
        }
        
    }
    else if(element==='delete')
    {
        let index=parseInt(prompt("Enter the index that you want to delete from the list !!"));
        if(!Number.isNaN(index))
        {
            const deleted=todos.splice(index,1);
            console.log(`Okay !! deleted ${deleted} successfully from the list !!`);

        }
        else
        {
            console.log("Sorry !! invalid index ");
        }
    }
    element=prompt("What would you like to do ?");
}

if(element==='quit')
{
    console.log("Okay !! you quitted the app !!");
}