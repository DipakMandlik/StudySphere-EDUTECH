import React from 'react'
import './profile.css'
import Table from 'react-bootstrap/Table';
import  { useState, useEffect } from 'react'

import axios from 'axios';

const Profile = () => {

    const [data, setdata] = useState([]);
    console.log(data)

    useEffect(() => {
        axios.get('http://localhost:5000/findall')
            .then((res) => {
                setdata(res.data.userData)
            })
            .catch((err) => {
                console.log(err)
            })
    })

    return (
        <>
            <section className='container-fluid '>
                <div className='row prof-page'>
                    <div className='col-2 prof-sidebar'>
                        <img src='https://cdn-icons-png.flaticon.com/128/3177/3177440.png' />
                        <ul>
                            <li><a href='#'>Information</a><br /><br /></li>
                            <li><a href='#'>Study</a><br /><br /></li>
                            <li><a href='#'>need help</a><br /><br /></li>
                            <li><a href='#'>About us</a><br /><br /></li>
                            <li><a href='#'>Terms and Condition</a><br /><br /><br /><br /><br /></li>
                            <li><a href='#'>Sign Out</a></li>
                        </ul>
                    </div>
                    <div className='col prof-window'>
                    {
                        data.map((item) => {
                            return (
                                <>
                                    <p>Name:{item.name}</p>
                                    <p>Email:{item.email}</p>
                                </>
                                
                            )
                        })
                    }
                    </div>
                </div>
            </section>
        </>
    )
}

export default Profile;