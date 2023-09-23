const express = require("express");

const MyError = require("./model/error");
const location_route = require("./routes/locations_route");
const user_router = require("./routes/users_route");
const app = express();

app.use(express.json()); //built in middle ware

app.use("/api/locations",location_route); //location route middleware custom made
app.use("/api/users",user_router); //user route middleware custom made

app.use("*",(req,res,next)=>{
    return next(new MyError("Cannot find path",404))
})

app.use((error,req,res,next)=>{  //error middlewre custom made
    if(res.headerSent){
        next(error)
    }
    res.status(error.code||500);
    res.json({result:"fail", message:error.message ||"Something bad happened"});
})

app.listen(5000, ()=>{
    console.log("server running @ 5000");
});
