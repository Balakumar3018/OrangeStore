import "./login-page.css";
import { Link } from "react-router-dom";

export default function LoginPage(){
    return(
        <div className="login-page">
            <div className="login-card">
                <h2>Login</h2>
                <label for="email" >
                    <input type="email" name="email" className="input-area" id="email" placeholder="email/username" required/>
                    </label>
                <label for="password" >
                    <input type="password" name="password" className="input-area" id="password" placeholder="password" required/>
                    </label>
                <button className="btn btn-primary">Login</button>
                <p>Forgot password</p> 
                <Link to="/signup">Create New Account</Link>
            </div>
        </div>
    )
}
