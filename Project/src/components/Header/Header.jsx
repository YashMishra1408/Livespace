import React, { useContext, useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import { getMenuStyles } from "../../utils/common";
import useHeaderColor from "../../hooks/useHeaderColor";
import OutsideClickHandler from "react-outside-click-handler";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
// import { useContext } from "react";
import logo3 from '../../../public/logo3.png';

const Header = () => {
  const {login_status,setLogin_status,users}=useContext(UserContext);
  const navigate=useNavigate();
  const [menuOpened, setMenuOpened] = useState(false);
  const headerColor = useHeaderColor();


  function handleLoginClicked(event){
    // console.log('button clicked')
    //<Link to="/login"></Link>
    if(login_status=="login"){
    navigate("/login")
    }
    else{
      setLogin_status("login");
    }
  }

  return (
    <section className="h-wrapper" style={{ background: headerColor }}>
      <div className="flexCenter innerWidth paddings h-container">
        {/* logo */}
        <img src="./logo3.png" alt="logo" className="logo_link" width={100} onClick={()=>{navigate('/')}}/>

        {/* menu */}
        <OutsideClickHandler
          onOutsideClick={() => {
            setMenuOpened(false);
          }}
        >
          <div
            // ref={menuRef}
            className="flexCenter h-menu"
            style={getMenuStyles(menuOpened)}
          >
           {users.usertype=="owner" ? <Link to="/owner">Display your Property</Link> : <Link to="/residencies">View Property</Link>  }
            <Link to="/value">Our Value</Link>
            <Link to="/contact">Contact Us</Link>         
            <Link to="/getstarted">Get Started</Link>
            <button className="button" onClick={handleLoginClicked}>
              {login_status}
            </button>
          </div>
        </OutsideClickHandler>

        {/* for medium and small screens */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
