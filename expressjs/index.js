const express=require("express");

const app=express();
console.log(express);


let port=3000;

app.listen(port,()=>{
    console.log("app is listening on port");

});

app.use((req,res)=>{
    console.log("Response Required");
    app.send("This is a basic respose");
});