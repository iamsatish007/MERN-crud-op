import React from 'react'
import axios from 'axios'
import { useState } from 'react';
import { useEffect } from 'react';
import '../App.css'
import { Link } from 'react-router-dom';

export default function ViewUser() {
    const [userdata, setuserdata] = useState([]);


    function getuserdata()
    {
        axios.get("http://localhost:9000/getusers").then((response) => {
            setuserdata(response.data);
        })
    }

    useEffect(() => {
        getuserdata();
    }, []);

    function deleteuser(d)
    {
        if(window.confirm("Are You Sure???"))
        {
            axios.delete(`http://localhost:9000/deleteuser/${d}`).then((response) => {
            getuserdata()
        })
        }


    }

    return (
        <div>
            <div className='header'>
                <span className='headertext'>List Of Users</span>
               <Link to={"/adduser"}><button className='normalbutton'>Add User</button></Link> 
            </div>
            <table>

                <tbody>
                    <tr>
                        <th>Name</th>
                        <th>Mobile</th>
                        <th>Email</th>
                        <th>Username</th>
                        <th>password</th>
                        <th>City</th>
                        <th>Action</th>
                        
                    </tr>

                    {userdata.map((item, i) => (
                        <tr key={i}>
                            <td>{item.name}</td>
                            <td>{item.mobile}</td>
                            <td>{item.email}</td>
                            <td>{item.username}</td>
                            <td>{item.password}</td>
                            <td>{item.city}</td>
                            <td><button className='normalbutton' onClick={()=>deleteuser(item.mobile)}>Delete</button> &nbsp;
                            <Link to={`/updateuser/${item.mobile}`}><button className='normalbutton'>Update</button></Link></td>
                        </tr>
                    ))}

                </tbody>

            </table>
        </div>
    )
}
