import React from "react";

import UsersList from "../components/UsersList";

const Users = () =>{
    const ALL_USERS =
    [
        {id:'u1', name:'Xyz', pic:'https://picsum.photos/200', numberoflocations:5},
        {id:'u2', name:'Abc', pic:'https://picsum.photos/200', numberoflocations:3},
    ];
    return <UsersList items = {ALL_USERS} />;
};


export default Users;