const MyError = require("../model/error");

let USER_LOCATIONS = [
    {
        id:"loc1",
        title:"Red Fort",
        desc:"The Red Fort, the largest monument in Delhi, is one of its most popular tourist destinations and attracts thousands of visitors every year.",
        address:"Netaji Subhash Marg, Lal Qila, Chandni Chowk, New Delhi, Delhi, 110006",
        userid: "u1"
    },
    {
        id:"loc2",
        title:"Taj Mahal",
        desc:"The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. ",
        address:"Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh 282001",
        userid: "u1"
    },
    {
        id:"loc3",
        title:"Jatayu Park",
        desc:"Jatayu Earth Center, also known as Jatayu Nature Park or Jatayu Rock, is a park and tourism centre at Chadayamangalam in Kollam district of Kerala, India.",
        address:"Jatayu Nature Park Rd, Jatayu Junction, Chadayamangalam, Kerala 691534",
        userid: "u2"
    }, 
];

exports.getLocationByLocId = (req, res, next)=>{
    const locid = req.params.locid;  // get locid from url
    const location = USER_LOCATIONS.find((loc) =>{
        return loc.id === locid;
    });
    if(!location){
        return next(new MyError("Cannot find location of this locid",404))
    }

    res.status(200).json({result:"success", message: location});
}

exports.getLocationByUserId = (req, res, next)=>{
    const uid = req.params.uid; //get uid from url
    const locations = USER_LOCATIONS.filter(loc=>{
        return loc.userid ==uid
    })
    if(!locations){
        return next(new MyError("Cannot find location of this userid",404))
    }
    res.status(200).json({result:"success", message: locations});
}

exports.createNewLocation = (req, res, next)=>{
    const  { title, desc, address, userid } = req.body;
    const newlocation = { title, desc, address, userid };
    USER_LOCATIONS.push(newlocation);

    res.status(201).json({result:"success", message:newlocation});
}

exports.deleteLocation = (req, res, next)=>{
    const locid = req.params.locid;  // get locid from url
    USER_LOCATIONS = USER_LOCATIONS.filter((loc)=>{loc.id!==locid});
    res.status(200).json({result:"successs",message:"location deleted"})
    
}