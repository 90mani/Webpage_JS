
import '../components/leave_button'
import { useState } from 'react';
import '../css/style.css'
import { useNavigate } from 'react-router-dom';

function Validate(user, psw) {
    const navigate = useNavigate();
    if (user != 'user') {
        alert('invalid username')
    } else if (psw != '123') {
        alert('invalid password')
    } else {
        navigate('/sample')
    }

}


function Login() {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");


    return (
        <div class="container">
            <div>
                <label for="uname"><b>Username</b></label>
                <input type="text" placeholder="Enter Username"
                    name="uname" value={userName}
                    required
                    onChange={(e) => setUserName(e.target.value)} />

                <label for="psw"><b>Password</b></label>
                <input type="password" placeholder="Enter Password" name="psw" required value={password}
                    onChange={(e) => setPassword(e.target.value)} />

                <button type="button" onClick={() => Validate(userName, password)}>Login</button>
                <label>
                    <input type="checkbox" checked="checked" name="remember" /> Remember me
                </label>
            </div>

        </div >
    );
}

export default Login;
