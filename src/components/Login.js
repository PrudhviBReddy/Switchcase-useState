import React, { useRef } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    let emailInputRef = useRef();
    let passwordInputRef = useRef();
    let navigate = useNavigate();


  return (
    <div className='App'>
        <form>
        <h1>LOGIN</h1>
       <div>
         <label>Email</label>
         <input ref={emailInputRef} type='text'></input>
       </div>
        <div>
          <label>Password</label>
          <input ref={passwordInputRef} type='text'></input>
        </div> 
        <button type='button' onClick={()=>{ 
            let typedEmail = emailInputRef.current.value;
            let typedPassword = passwordInputRef.current.value;
            if(typedEmail == "prudhvi@gmail.com" && typedPassword == "Prudhvi"){
                navigate("/Homepage");
            }else{
                alert("Please check your emailid/password");
            }
        }}>LOGIN</button> 
        </form>
        <br></br>
        <p>Don't have account?<Link to="/signup">Signup</Link></p>
        
        
    </div>

  )
}

export default Login