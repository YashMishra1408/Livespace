import { useState } from "react";
import UserContext from "./UserContext";
 
function UserContextProvider({children}){
    const [login_status,setLogin_status]=useState("login")
    const [users,setUsers]=useState([])
    return(
    <UserContext.Provider value={{login_status,setLogin_status,users,setUsers}}>
            {children}
    </UserContext.Provider>
    )
}
export default UserContextProvider