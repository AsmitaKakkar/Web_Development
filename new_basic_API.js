var http=require('http');
var data="Asmita"
http.createServer(function(request,response){
    response.writeHead(200,{'Content-Type':'application\json'})
    response.write(data);
    response.end();
}).listen(4000);