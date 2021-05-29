import React, {useState} from 'react'
import './EditProfile.css'
import { useLocation } from "react-router-dom";

function EditProfile() {
    let query = new URLSearchParams(useLocation().search)
    const [name,setName] = useState(query.get('name'));
    const [email,setEmail] = useState(query.get('email'));
    const [number,setNumber] = useState(query.get('number'));

    return (
        <div className='Form'>
            <form>
                <input type='text' name='name' placeholder='Name' 
                onChange={ e=>setName(e.target.value)} value={name}/>
                <input type='email' name='email' placeholder='Email' 
                onChange={ e=>setEmail(e.target.value)} value={email}/>
                <input type='text' name='number' placeholder='Number'  
                onChange={ e=>setNumber(e.target.value)} value={number}/>
                <input type='submit' value='Update'/>
            </form>
        </div>
    )
}

export default EditProfile
