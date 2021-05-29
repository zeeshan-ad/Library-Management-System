import React from 'react'
import './Profile.css'

function Profile() {
    return (
        <div className="container">
        <div className="card">
        <img src="https://www.w3schools.com/howto/img_avatar.png" alt="Avatar" width="250"/>
        <div className="info">
            <div className="head">
            <h4><b>Zeeshan Ahmed</b></h4> 
            <i class="fas fa-edit"></i>
            </div>
            <h5>Email </h5><p>zeeshanahmed959@gmail.com</p> 
            <h5>Phone number </h5><p>7059869677</p> 
        </div>
        </div>
        </div>
    )
}

export default Profile
