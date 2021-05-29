import React from 'react'
import './Profile.css'
import {Link} from 'react-router-dom'

function Profile() {
    const name = "Zeeshan Ahmed";
    const email = "zeeshanahmed959@gmail.com";
    const number = 7059869677;
    return (
        <div className="profile-card">
        <div className="card">
        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" width="250"/>
        <div className="info">
            <div className="head">
            <h4><b>{name}</b></h4> 
            <Link to={"/EditProfile.js?name="+name+"&email="+email+"&number="+number}><i class="fas fa-edit"></i></Link>
            </div>
            <h5>Email </h5><p>{email}</p> 
            <h5>Phone number </h5><p>{number}</p> 
        </div>
        </div>
        </div>
    )
}

export default Profile
