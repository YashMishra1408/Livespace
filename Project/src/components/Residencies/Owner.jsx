import { useEffect, useState } from 'react';
import './owner.css'
import axios from 'axios';
import house1 from '../../../public/r2.png'
function Owner(){
    const [property,setProperty]=useState({})
    const [flag,setFlag]=useState(0)
    const [details,setDetails]=useState([])
    function handleChange(e) {
        let value = e.target.value;
        let name = e.target.name;
        setProperty({ ...property, [name]: value });
     
      }
      async function handleSubmit(e){
        e.preventDefault();
        await axios.post("http://localhost:8000/property",property)
        .then((msg)=>console.log(msg.data))
        .catch((Error)=>console.log(Error))
        alert("Property Registered")
    }
    async function BringData(){
        
        await axios.get("http://localhost:8000/property")
        .then((msg)=>setDetails(msg.data))
        .catch((Error)=>console.log(Error))
    }

    useEffect(()=>{BringData()},[]);
    return(
        <div >
        <h3 className='add_property'>Add Your Property Here</h3>
        <form onSubmit={handleSubmit}>
           <div  className="owner_form">
        <div className='wrapper'>
            <label>Enter your Property name</label>
            <input type="text" name="property_name" onChange={handleChange}/>
            </div>
                <div className='wrapper'>
                <label>Enter the asking Price for your Property</label>
                <input type="number" name="property_price" onChange={handleChange}/>
                </div>
                <div className='wrapper'>
                <label>Enter the Address</label>
                <input type="text" name="property_address"  onChange={handleChange}/>
                </div>
           </div>
       
            <button className='btn_owner'>Save</button>
        </form>

        <h2 className='prop_details'>Your Property Details are:</h2>
        <div className='card'>
            {/* detail is a array of object  */}
        {details.map((value)=>(
        <div  key={value.id}>
            <div className='card_border'>
                <img className='card_photo' src={house1} />
                <div className='property_price'>₹ {value.property_price}</div>
                <div className='property_name'>{value.property_name}</div>
                
                <div className='property_address'>{value.property_address}</div>

            </div>
        </div>))}</div>
        </div>
    )
}
export default Owner