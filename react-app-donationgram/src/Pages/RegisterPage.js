import React, { useState } from 'react';
import axios from 'axios';
// import Checkbox from './Checkbox';
//import { setUserSession } from './Utils/Common';

export default function RegisterPage(props) {
  //const [loading, setLoading] = useState(false);
  const username = useFormInput('');
  const password = useFormInput('');
  const confirmpassword = useFormInput('');
  //const [error, setError] = useState(null);
  const [agree, setAgree] = useState(false);

  const checkboxHandler = () => {
    // if agree === true, it will be set to false
    // if agree === false, it will be set to true
    setAgree(!agree);
    console.log("Checkbox set to:" + agree);
    // Don't miss the exclamation mark
  }

  // handle button click of login form
  const handleLogin = () => {
    //setError(null);
    //setLoading(true);
    if((password.value!="") && (username.value!="") && (confirmpassword!=""))
    {
      if (password.value === confirmpassword.value)
      {
        if (agree == true)
        {
          try
          {
            const response = axios.post('/create',
            {
                username: username.value, 
                password: password.value
            });
              console.log("User Details Sent to Database ✔");
              alert("Account Created");
              props.history.push('/dashboard');
          }
          catch{
            console.log("An error occured");
          }
        }
        else 
        {
          alert("Please agree to the Terms & Conditions");
        }
      }
      else{
        alert("Passwords do not match");
      }
    }
    else{
      alert("Fields cannot be empty");
    }
  }
    // else
    // {
    //   alert("Password do not match. Please try again.")
    // }
    // axios.post('http://localhost:3306/generaldb/login', { username: username.value, password: password.value }).then(response => {
    //   setLoading(false);
    //   //setUserSession(response.data.token, response.data.user);
    //   props.history.push('/dashboard');
    // }).catch(error => {
    //   setLoading(false);
    //   //if (error.response.status === 401) setError(error.response.data.message);
    //   setError("Something went wrong. Please try again later.");
    // });
    //{error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
    
  return (
    <box>
      <div className="registerbody">
        <div className="cont">
          <div className="form sign-in">
            <h5>REGISTER</h5>
            <label>
              Username
              <input className="center" type="text" {...username} autoComplete="new-password" required="required"/>
            </label>
            <br /><br />
            <label>
              Password
              <input className="center" type="password" {...password} autoComplete="new-password" required="required"/>
            </label>
            <br /><br />
            <label>
              Confirm Password
              <input className="center" type="password" {...confirmpassword} required="required"/>
            </label>
            <div className="TnC">
              <input type="checkbox" id="agree" onChange={checkboxHandler}/><p> I agree to <b>terms and conditions</b><i> (required) </i></p>
            </div>
            <br />
            <input className="center" type="button" className="submit" value="Register" onClick={handleLogin} disabled={!agree} /><br />
          </div>
        </div>
      </div>
    </box>
  );
}

const useFormInput = initialValue => 
{
  const [value, setValue] = useState(initialValue);

  const handleChange = e => {
    setValue(e.target.value);
  }
  return {value,  onChange: handleChange}
}
