import React, {useState} from 'react';
import ReactDom from 'react-dom';
import './LoginPage.css';
import axios from 'axios';
//import {currentUser} from './class';

export default function LoginPage(props) {

    //const serverURL = 'http://localhost:8080';
    const username = useFormInput('');
    const password = useFormInput('');
    
    const handleLogin = () => {
        
    if((password.value!="") && (username.value!=""))
    {
        try 
        {
            const response = axios.post('/signin',
            {
                username: username.value, 
                password: password.value
            });
                console.log("User Details Sent to Database ✔");
                alert("Access Granted");
                props.history.push('/dashboard');        
            }
        catch
        {
            console.log("Error");
            alert("Error. Please try again");
        }
    }
    else{
        alert("Fields cannot be empty");
    }
}

    
    //const [errormsg, setErrMessage] = React.useState(null);
    //const { handleChange, handleSubmit, values, errors } = useForm(submitForm,validate);

    // const displayInfo = () => {
    //     console.log(username + password)
    // }

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     try 
    //     {
    //         const getUsername = await axios.post(serverURL + '/account', {
    //             username: values.username,
    //             password: values.password
    //         });

    //         const getPassword = await axios.post(serverURL + '/account', {
    //             password: values.password
    //         });
    
    //         //setMessage(response.data.message);
    //         console.log(response.data);
    //         console.log("Data Found");
    
    //     }
    //     catch (error) {
    //         //setMessage(error.response.data.message);
    //         console.log(error.response)
    //     }
    // }

    return (
        <div className="loginbody">
            <div className="cont">
                <div className="form sign-in">
                    <h5>Sign In</h5>
                    <label>
                        Username
                        <input name="userName" type="text" {...username} required="required"/>
                    </label>
                    <br /><br />
                    <label>
                        Password
                        <input name="password" type="password" {...password}required="required"/>
                    </label>
                    <br /><br />
                    <input className="submit" type="button" value="Sign In" onClick={handleLogin}/>
                    <br /><br />
                    <a className="forgot-pass" href="./contactus">Forgot Password?</a>
                    <br /><br />
                    <a className="forgot-pass" href="./register">Not a Member? Click to Register!</a>
                </div>
            </div>
        </div>
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
