import { useNavigate } from "react-router-dom"
import './Login.css'
import axios from 'axios'
import { useState } from "react"
import UserContext from "../context/UserContext";
import { useContext } from "react";
 
 
function Login() {
  const {login_status,setLogin_status,users,setUsers}=useContext(UserContext);
 
  const [em,setEm]=useState("")
 
  const [user, setUser] = useState({})
 
  const Navigate = useNavigate();

  function handleChange(e) {
    let value = e.target.value;
    let name = e.target.name;
    setUser({ ...user, [name]: value });
 
  }
  let obj;
  async function handleSubmit(e) {
    e.preventDefault();  //to stop the page from reloading or refreshing
    let temp = [];
    let ans = await axios.get(`http://localhost:8000/users?username=${user.username}&password=${user.password}`)
      .then((msg) =>temp = msg.data)
      .catch((Error) => console.log(Error));
      // console.log(temp,ans)
    obj = temp[0]
   
    // {console.log(ans)}
    checkuser(ans);
  }
 
  function checkuser(ans) {
    if (ans.length !== 0) {
      // setData(obj)
      // setLogin_status('Logout');
      // setLogin_name(user.username);
      console.log(ans)
      let p=ans[0]
      setUsers(p);
      alert("Logged in")
      setLogin_status("logout")
      Navigate('/')
    }
    else if(ans.length===0){
      setEm('Wrong Credentials')
    }
  }

  return (
    <>
    
    <div className="form_main">
      <form onSubmit={handleSubmit} className="signin_form">
        <input type="text" name="username" placeholder="username" onChange={handleChange} /><br />
        <input type="password" name="password" placeholder="password" onChange={handleChange} /><br />
        <button className="btn">Submit</button><br />
        <div className="register_link" onClick={() => Navigate("/register")}>New User? Register here..</div>
        <div>{em}</div>
      </form>
     
    </div>
    
   
  </>
  )
}
export default Login