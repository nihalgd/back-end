// let a = "nihal"
// console.log(a);

// let args = process.argv;

// for (let i = 0; i < argv.length; i++) {
//     console.log("hellow" , args[i]);
// }


// fs in node js - - - - - - - - - - - - - - - - - - - - - - - - - - - - fs in node js - - - - - - - - - - - - - - - - - - - - - - - - - - - -

const { log } = require('console')
const fs = require('fs')

// fs.writeFile("heyy.txt" , "hellooww kaise hoo" , function(err){
//     if(err) console.log(err);
//     else console.log("done");
// })

// fs.appendFile("heyy.txt" , "badiyaa" , function(err){
//     if(err) console.log(err);
//     else console.log("done");
// })

// fs.rename("heyy.txt" , "hellow.txt", function(err){
//     if(err) console.log(err);
//     else console.log("do");  
// } )

// fs.copyFile("hellow.txt" , "hellow1.txt" , function(err){
//     if(err) console.log(err.message);
//     else console.log("done");
// })

// fs.unlink("hellow1.txt" , function(err){
//     if(err) console.log(err.message);
//     else console.log("file delete");  
// })

// fs.rm("./package-lock.json", {recursive : true} , function(err){
//     if(err) console.log(err.message);
//     else console.log("folder removed");
// })

// HTTP - HTTPS - - - - - - - - - - - - - - - - HTTP - HTTPS - - - - - - - - - - - - - - - - HTTP - HTTPS - - - - - - - -

// const http = require('node:http')
// const server = http.createServer(function(req,res){
//     res.end("hellow world");
// })
// server.listen(3000);