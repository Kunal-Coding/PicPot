import React, {useState} from "react";
import "./NewLocation.css";

// const NewLocation = () => {
//     const [newlocation, setNewlocation] = useState({
//         title: '',
//         desc: '',
//         address: '',
//         image: '',
//     });

//     const submitHandler = (event) => {
//         event.preventDefault();
//         console.log("Submit button clicked");
//         console.log("New location page:", newlocation);
//     };

//     const changeHandler = (event) => {
//         const inputName = event.target.name;
//         const newValue = event.target.value;

//         setNewlocation((previousValue) => {
//             if (inputName === "newlocationtitle") {
//                 return {
//                     ...previousValue,
//                     title: newValue,
//                 };
//             } else if (inputName === "newlocationdesc") {
//                 return {
//                     ...previousValue,
//                     desc: newValue,
//                 };
//             } else if (inputName === "newlocationaddr") {
//                 return {
//                     ...previousValue,
//                     address: newValue,
//                 };
//             }
//             // Ensure you have a default return here.
//             return previousValue;
//         });
//     };

//     console.log("Render: newlocation =", newlocation);

const NewLocation = () =>{

    const [newlocation, setNewlocation] = useState({
        title:'',
        desc:'',
        address:'',
        image:'',
    });

    const submitHandler = (event) =>{
        event.preventDefault();
        console.log("new location page : ", newlocation);
    };
    const changeHandler = (event) =>{
        const inputname = event.target.name;
        const newValue = event.target.value;
       
        setNewlocation(previousValue =>{
            if(inputname === "newlocationtitle"){
                return {
                    title: newValue,
                    desc: previousValue.desc,
                    address: previousValue.address
                }
            }
            else if(inputname === "newlocationdesc"){
                return {
                    title: previousValue.title,
                    desc: newValue,
                    address: previousValue.address
                }
            }
            else if(inputname === "newlocationaddr"){
                return {
                    title: previousValue.title,
                    desc: previousValue.desc,
                    address: newValue
                }
            }
        })
    };

    return (
        
        <div className="container">
            <div className="addlocation-container">
                <div>
                <form onSubmit={submitHandler}>
            <div className="form-control">
                <label>
                    Title
                    <input name ="newlocationtitle" type="text" required onChange={changeHandler}/>
                </label>
            </div>
            <div className="form-control">
                <label>
                    Description
                    <textarea name ="newlocationdesc" rows="3" type="text" required onChange={changeHandler}/>
                </label>
            </div>
            <div className="form-control">
                <label>
                    Address
                    <input name ="newlocationaddr" type="text" required onChange={changeHandler}/>
                </label>
            </div>
            <div className="form-control">
                <label>
                    Upload Image
                    <input name ="image" type="file" multiple accept="image/*" required onChange={changeHandler}/>
                </label>
            </div>
            <div className="form-control">
                <button>Submit</button>
            </div>
        </form>
                </div>
            </div>
        </div>
        
    );
};

export default NewLocation