import React, { useEffect,useState } from 'react'
import axios from 'axios'


const Profile1 = ({user1}) => {
    const [i,seti]=useState(false)
    const [sk,setsk]=useState(false)
    const [st,setst]=useState(false)
    const [c,setc]=useState(false)
    const [l,setl]=useState(false)
    const [d,setd]=useState(true)

   
  

    function resetAll(){
        seti(false);setsk(false);setst(false);setc(false);setl(false);setd(false);
    }
    function info(){seti(true)}
    function skills(){setsk(true)}
    function studies(){setst(true)}
    function contact(){setc(true)}
    function logOut(){window.location.reload();}


  return (
    <>
        <div className='container-fluid '>
            <div className='row'>
                <div className='col-4'>
                <a >DashBoard</a>  <br/>
                    <a onClick={info}>Information</a>  <br/>
                    <a onClick={skills}>Skills</a>  <br/>
                    <a onClick={studies}>Studies</a>  <br/>
                    <a onClick={contact}>Contact</a>  <br/>
                    <a onClick={logOut}>Log Out</a>  <br/>
                </div>
                <div className='col'>
                    {i && <div>
                        {/* <img src='' width={200} height={200}/> */}
                        <h6>Name : {user1.name}</h6>
                        </div>
                    }
                </div>
            </div>
        </div>
    </>
  )
}

export default Profile1