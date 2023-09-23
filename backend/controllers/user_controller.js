const MyError = require("../model/error");

const ALL_USERS = [
    {
        id: "u1",
        name: "Xyz",
        email: "xyz@picpot.com",
        password: "xyz123"
    },
    
    {
        id: "u2",
        name: "Mno",
        email: "mno@picpot.com",
        password: "mno123"
    },
];

exports.getUsers = (req, res, next)=>{
    res.status(200).json({result: "success", message: ALL_USERS});
}

exports.register = (req, res, next)=>{
    const {name, email, password} = req.body;
    const findUser = ALL_USERS.find((user)=>{
        return user.email===email;
    });
    if(findUser){
        return next(new MyError("Email already exists", 422))
    }
    const newuser = {
        id:"u"+(Math.trunc(Math.random()*100)),
        name, email, password};

        ALL_USERS.push(newuser);
        res.status(201).json({result:"success", message:newuser});
};

exports.login = (req, res, next)=>{
    const {email, password} = req.body;
    const findUser = ALL_USERS.find((user)=>{
        return user.email===email;
    });
    if(!findUser || findUser.password !== password){
        return next(new MyError("Email or password not found", 401))
    }
    res.status(200).json({result: "success", message:"logged in successfully"});
};
