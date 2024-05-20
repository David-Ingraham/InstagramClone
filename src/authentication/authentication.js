import React, {useState}from 'react'
import '../css/style.css'
import Login from './login'
import Signup from './signup'


function Authentication() {
    const [active, setActive] = useState('login');
    const handleChange = () => {
        setActive(active === 'login' ? 'signup' : 'login')
    }
  return (
    <div className='authentication'>
        <div className='auth__left'>
            <img src='https://i.imgur.com/P3Vm1Kq.png' alt='' />
        </div>
        <div className='auth__right'>
            {active === 'login' ? (<Login/>) : (<Signup/>)}
         
            <div className='auth__more'>
                
                <span> 
                {active === 'login' ? (<> Dont have an account? <button onClick={handleChange}> Signup</button> </>) : (<> Have an account? <button onClick={handleChange} > Login</button> </>) }

                   
                
                </span>
            </div>
        </div>
    </div>
  )
}

export default Authentication