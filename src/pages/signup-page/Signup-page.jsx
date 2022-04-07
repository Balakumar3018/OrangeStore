import "./Signup-page.css";
import { Link } from "react-router-dom";

export default function SignupPage(){
    return( 
        <div className="login-page">
            <div className="login-card signup-card">
                <h2>Sign Up</h2>
                <label for="name">
                <input type="text" name="name" className="input-area" id="name" placeholder="Name"/> 
                </label>
                <label for="email" >
                <input type="email" name="email" className="input-area" id="email" placeholder="email" required/>
                </label>
                <label for="password" ><input type="password" name="password" className="input-area" id="password" placeholder="password" required/>
                </label>
                <label for="password" ><input type="password" name="password" className="input-area" id="password" placeholder="confirm-password" required/>
                </label>
                <button className="btn btn-primary">Signup</button>
                <Link to="/login" >Already have account ?</Link>
            </div>
        </div>
    )
}
