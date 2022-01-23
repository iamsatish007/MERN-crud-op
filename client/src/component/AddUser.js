import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

export default function AddUser() {

    const [name,setname]=useState('');
    const [mobile,setmobile]=useState('');
    const [email,setemail]=useState('');
    const [username,setusername]=useState('');
    const [pwd,setpwd]=useState('');
    const [city,setcity]=useState('');

    function savedata()
    {
        if(name==='')
        {
            alert("Enter Name");
            return;
        }
        if(mobile==='')
        {
            alert("Enter Mobile");
            return;
        }
        if(email==='')
        {
            alert("Enter Email");
            return;
        }
        if(username==='')
        {
            alert("Enter Username");
            return;
        }
        if(pwd==='')
        {
            alert("Enter Password");
            return;
        }
        if(city==='')
        {
            alert("Enter City");
            return;
        }

        axios.post("http://localhost:9000/saveuser",
        {   
           
                "name":name,
                "mobile":mobile,
                "email":email,
                "username":username,
                "password":pwd,
                "city":city
            
        }).then((response) => {
            if(response.data==='USER SAVED')
            {
                alert("Success");
            }
            else
            {
                alert('Something Went Wrong.');
            }
        })






    }

    return (
        <div>
            <div className='header'>
                <span className='headertext'>Add Users</span>
               <Link to={"/"}><button className='normalbutton'>View User</button></Link> 
            </div>
            <br></br>
            <div className='form-area'>

                <input type="text" className='form-input' value={name} onChange={(e)=>setname(e.target.value)} placeholder='Name'></input>
                <input type="number" className='form-input' value={mobile} onChange={(e)=>setmobile(e.target.value)} placeholder='Mobile'></input>
                <input type="text" className='form-input' value={email} onChange={(e)=>setemail(e.target.value)} placeholder='Email'></input>
                <input type="text" className='form-input' value={username} onChange={(e)=>setusername(e.target.value)} placeholder='Userame'></input>
                <input type="password" className='form-input' value={pwd} onChange={(e)=>setpwd(e.target.value)} placeholder='Password'></input>
                <input type="text" className='form-input' value={city} onChange={(e)=>setcity(e.target.value)} placeholder='City'></input>
                <button className='submitbutton' onClick={()=>savedata()}>SAVE</button>
            </div>
        </div>
    )
}
