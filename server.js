var connect = require('connect');
var http = require('http');
var app = connect();
var fs = require('fs');
var obj;
http.createServer(function(req, res){
 // var fortuneCookie = function(req, res, next) {
//  res.setHeader('Content-Type', 'text/plain');
//  res.end('fortune cookie');
//next();
//};

//var horoscope = function(req, res, next) {
//  res.setHeader('Content-Type', 'text/plain');
//  res.end('Horoscope');
//next();
//};

fs.readFile('client/home.json', handleFile);
fs.readFile('client/horoscope.json', handleFile2);
// Write the callback function
function handleFile(err, data) {
    if (err) {throw err}
    var random = Math.floor(Math.random() * 4) + 1;
    console.log(random);
    //Fortunes provided by https://joshmadison.com/2008/04/20/fortune-cookie-fortunes/
    obj = JSON.parse(data);
    if (random == "1") {
      res.write(obj.fortune1);
      res.end();
    }
    if (random == "2") {
      res.write(obj.fortune2);
      res.end();
    }
    if (random == "3") {
      res.write(obj.fortune3);
      res.end();
    }
    if (random == "4") {
      res.write(obj.fortune4);
      res.end();
    }
    res.end();
}

function handleFile2(err, data) {
  if(err) {throw err}
  var date = new Date();
  var dd = date.getDate(); 
  var mm = date.getMonth()+1;
  var today = dd + "/" + mm;
  console.log(today);
  res.write(today);
  res.end();
}

//    fs.readFile('client/home.html',function (err, data){
 //       res.writeHead(200, {'Content-Type': 'text/javascript'});
  //      res.write(data);
//        res.end();
  //  });
}).listen(process.env.PORT, process.env.IP);


//var server = app.listen(PORT);
//http.createServer(server);
//http.createServer(app);

//console.log('Server is running');
//app.use('client/home.html', function fooMiddleware(req, res, next) {
  // req.url starts with "/foo" 
//  next();
//});