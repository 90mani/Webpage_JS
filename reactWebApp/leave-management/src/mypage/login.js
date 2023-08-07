import { useState } from 'react';
import '../css/style.css'



 function ValidateForm(fname,contact,email,username,password,selection)
    {
        if (fname =="") {
           alert("please enter first name");
          console.log(fname);
            return false;
        }  
        if(!isNaN(fname)){
            alert("First name must be Alphabets only"); 
            return false;
        }
        if(fname.length>20){
            alert(" First name must be within 20 characters"); 
            return false;
            }
        
        if(contact==""){                                                 
                alert("enter a mobile number");  
                return false;
            }
        if(isNaN(contact)){                                               
              alert("Mobile Number Must Be In Numbers Only");
              return false;
            } 
            
        if(email==""){
              alert("please enter an email");
              return false;
            }

        if (username == "") {
               alert("please enter Username");
                return false;
                
            }
        if(!isNaN(username)){
                alert("Username must be Alphabets only"); 
                return false;
            }
        if(username.length>20){
                alert(" Username must be within 20 characters");   
                return false;
                }

           
        if(password==""){
                  alert("please enter an password");
                  return false;        
                }
         if(password.length>8){
                  alert("Password Must Be Within 8 characters");
                  return false;
                 }
         
         if(selection=="0"){
                 alert("Please select any one of the user category");
                 return false;
                 }      
 }

 function Login(){
    const [fname, SetName] =useState("");
    const [contact, SetCon] =useState("");
    const [email, SetEmail] =useState("");
    const [username, SetUser] =useState("");
    const [password, SetPass] =useState("");
    const [selection, SetSelect]=useState("");
   
return(


<div class="container"> 
     <header> Add  User Page </header>
     <form >
    <div class="content">
    <div class="fontuser">
        <label><b>FULL NAME</b></label><br></br>
        <input type="text" id="fname" placeholder="full name" required value={fname} onChange={(e) => SetName(e.target.value)}></input>
        </div><br></br>
          
       <div class="field">     
       <div class="input-field"> 
         <label><b>CONTACT</b></label>
         <input type="tel" id="phone" placeholder="contact" maxLength="10" required value={contact} onChange={(e) => SetCon(e.target.value)}></input>
         </div>
        
        <div class="input-field"> 
            <label><b>EMAIL</b></label>
            <input type="email" id="email" placeholder="email" required value={email} onChange={(e) => SetEmail(e.target.value)}></input>
            </div></div><br></br>
          
        <div class="use">
        <div class="input-use">
            <label><b>USERNAME</b></label>
            <input type="text" id="username" placeholder="username" required value={username} onChange={(e) => SetUser(e.target.value)}></input>
             </div>
          
        
        <div class="input-use">
            <label><b>PASSWORD</b></label>
            <input type="password" id="password" placeholder="password" required value={password} onChange={(e) => SetPass(e.target.value)}></input>
            </div>
          
      
        <div class="input-use">
            <label><b>USER CATEGORY</b></label>
        <select id="selection" name="selection" size="1" required value={selection} onChange={(e) => SetSelect(e.target.value)}>
        <option value="0">--select--</option>
        <option value="1">ADMIN</option>
        <option value="2">STAFF</option>
        </select></div></div>
        
        <div class="button">
        <input type="submit" onClick={() => ValidateForm(fname,contact,email,username,password,selection)} class="submit-btn" value="submit"></input>
        
        </div>
        </div>
        
        <p>FIRSTNAME:{fname}</p>
        <p>CONTACT:{contact}</p>
        <p>EMAIL:{email}</p>
        <p>USERNAME:{username}</p>
        <p>PASSWORD:{password}</p>
        <p>CATEGORY:{selection}</p>

        </form>
        </div>
        );
        }
        export default Login;