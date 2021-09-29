let element=prompt("What you want to do ?");

let List={};

while(element!='quit')
{
    if(element==='new')
    {
        prompt("Enter the task you want to add !!");
        break;

    }
    else if(element==='list')
    {
        console.log("(*************************************");
        console.log("           Todo Elements ");
        console.log("**************************************");
        for(let i=0;i<=List.length;i++)
        {
            console.log(List[i]);
        }
        
    }
    else if(element==='delete')
    {
        let gotit=prompt("Enter the task that you want to delete from the list !!");
        for(let del of List[del])
        {
            if(del===gotit)
            {
                console.log("Deleted ");
            }
        }
    }
}

if(element==='quit')
{
    console.log("Okay !! you quitted the app !!");
}