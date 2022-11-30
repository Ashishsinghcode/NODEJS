var fs =require('fs')
//sync
 fs.writeFileSync('demo.txt','Good evening class')
 var data1=fs.readFileSync('demo.txt','utf-8')
 console.log(data1);
 fs.writeFileSync('demo.txt','Good evening class 2nd time')
 var data2=fs.readFileSync('demo.txt','utf-8')
 console.log(data2);

//async
fs.writeFile('demo.txt','Hello Ashish',
    function(err,result){
        if(err){
            console.log(err);
        }
    }
)
var data3=fs.readFile('demo.txt','utf-8',
    (err,result)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log(result)
        } 
    })
   


