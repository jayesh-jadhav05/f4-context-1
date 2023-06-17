import React, { useState } from "react";
import './App.css';

const App = () => {
  const [fullname,setFullName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [Cpassword,setCPassword] = useState("")
  const [error,setError] = useState([{message : ""},{styles : ""}])

  const submitForm = (e) => {
    
     if(fullname === "" || email === "" || password === "" || Cpassword === "")
     {
      setError([{message : "Error : All The Fiels are Mandatory"},{color : "red"}]);
     }else if(password !== Cpassword)
     {
      setError([{message : "Error : Password Mismatching"},{color : "red"}]);
     }else{
      setError([{message : "Successfully Signed up"},{color : "green"}]);
     }
     setFullName("");
     setEmail("");
     setPassword("");
     setCPassword("")
  };

  return(
    <div className="form">
      <div className="form-container">
         <h2>Signup</h2>
         <input type="text" placeholder="Full Name" value={fullname} onChange={(e) => setFullName(e.target.value)} required/>
         <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
         <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required/>
         <input type="password" placeholder="Confirm Password" value={Cpassword} onChange={(e) => setCPassword(e.target.value)} required/>
         <p style={error[1]}>{error[0].message}</p>
         <button onClick={submitForm}>Signup</button>
      </div>
    </div>
  )
};

export default App;