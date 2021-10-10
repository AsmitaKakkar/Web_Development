const numbers=[1,2,3,4,5,6,7,8,9,10];

const doubles=numbers.map(function(num)
{
    return (num*2);
})


const movies=[
   {
    title:'harry Potter',
    score:98
   },
   {
       title:'amanda',
       score:23
   },
   {
       title:"Gabbar",
       score:95
   },
   {
        title:"Bahubali",
        score:80
   }

]

const titles=movies.map(function(movie)
{
    //console.log( movie.title);
    //return movie.title;
    return movie.title.toUpperCase();
})