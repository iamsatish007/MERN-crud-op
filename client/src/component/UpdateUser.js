import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'

export default function UpdateUser() {
    const [userdata, setuserdata] = useState([]);
    let params = useParams();
    let m = params.mobile;
    const [name, setname] = useState('');
    const [mobile, setmobile] = useState('');
    const [email, setemail] = useState('');
    const [username, setusername] = useState('');
    const [pwd, setpwd] = useState('');
    const [city, setcity] = useState('');



    useEffect(async () => {
        let result = await axios.get(`http://localhost:9000/getusers/${m}`);
        setuserdata(result.data)
        setname((result.data)[0].name)
        setmobile((result.data)[0].mobile)
        setemail((result.data)[0].email)
        setusername((result.data)[0].username)
        setpwd((result.data)[0].password)
        setcity((result.data)[0].city)
    }, []);

    function updatedata() {
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



        axios.put("http://localhost:9000/updateuser",
        {   
           
                "name":name,
                "mobile":mobile,
                "email":email,
                "username":username,
                "password":pwd,
                "city":city
            
        }).then((response) => {
            if(response.data==='UPDATE OK')
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
                <span className='headertext'>Update Users</span>
                <Link to={"/"}><button className='normalbutton'>View User</button></Link>
            </div>
            <br></br>
            <div className='form-area'>
               
                
                <input type="text" Value={name}     className='form-input' onChange={(e) => setname(e.target.value)} placeholder='Name'></input>
                <input type="number" Value={mobile} className='form-input' onChange={(e) => setmobile(e.target.value)} placeholder='Mobile' readOnly={true}></input>
                <input type="text" className='form-input' Value={email} onChange={(e) => setemail(e.target.value)} placeholder='Email'></input>
                <input type="text" className='form-input' Value={username} onChange={(e) => setusername(e.target.value)} placeholder='Userame'></input>
                <input type="text" className='form-input' Value={pwd} onChange={(e) => setpwd(e.target.value)} placeholder='Password'></input>
                <input type="text" className='form-input' Value={city} onChange={(e) => setcity(e.target.value)} placeholder='City'></input>
                <button className='submitbutton' onClick={() => updatedata()}>UPDATE</button>
                
            </div>
        </div>
    )
}
