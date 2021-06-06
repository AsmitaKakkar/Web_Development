var http=require('http');
http.createServer (function (req,res)
{
    res.write("Hey!! This is asmita kakkar!!");
    res.end();
}).listen(50000);