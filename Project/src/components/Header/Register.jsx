import { useState } from "react";
import { useResolvedPath } from "react-router-dom";
import './Register.css'
import axios from 'axios'
function Register(){
 
    const [user,setUser]=useState({
 
    })
 
    function handleChange(event){
        let name=event.target.name;
        let value=event.target.value;
        console.log(name,value)
        setUser({...user,[name]:value});
 
    }
    async function handleSubmit(e){
        e.preventDefault();
        await axios.post("http://localhost:8000/users",user)
        .then((msg)=>console.log(msg.data))
        .catch((Error)=>console.log(Error))
        alert("User Registered")
    }
    return(
        <div className="form_main">
        <form onSubmit={handleSubmit} className="form" >
        <table className="table">
            <tbody  className="tbody">
                <tr>
                <td><input type="text" name="fullname" placeholder="First Name" onChange={handleChange}/></td>
                <td><input type="text" name="lastname" placeholder="Last Name" onChange={handleChange}/></td>
                </tr>
                <tr>
                <td><input type="text" name="username" placeholder="username" onChange={handleChange}/></td>
                <td><input type="password" name="password" placeholder="password" onChange={handleChange}/></td>
                </tr>
                <tr>
                    <td><input type="email" name="email" placeholder="email" onChange={handleChange}/></td>
                    <td><input type="tel" name="mobile" placeholder="mobile no" onChange={handleChange} /></td>
                </tr>
         </tbody>
         </table>
          <div>
         <span className="select_type"><input type="radio" name="usertype" value="user" onChange={handleChange} />User</span>
        <span className="select_type"><input type="radio" name="usertype" value="owner" onChange={handleChange} />Owner</span></div>
        {/* <span className="select_type"><input type="radio" name="usertype" value="admin" onChange={handleChange} />Admin</span> </div>  */}
         <button className="continue_signin_btn">Continue</button>
         <div className="policy">By creating an account, I accept the <br/>Terms & Conditions </div>
         </form>
        </div>
    )
}
export default Register