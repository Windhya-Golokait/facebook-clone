import React from "react";
import "./LoginPage.css";
import { Link } from 'react-router-dom';
import HeaderArea from "../HeaderArea/HeaderArea";

function LoginPage() {
    return (
        <div className="Login">
            <div className="facebook">
                <div className="facebookText">
                    facebook
                </div>
                <div className="title">
                    Facebook helps you connect and share <br/> with the people in your life.
                </div>
            </div>
            <div className="loginContainer">
                <div className="loginDetail">
                    <input type="email" placeholder="Email address or phone number"/>
                    <br/>
                    <input type="password" placeholder="Password"/>
                    <br/>
                    <Link to="/HeaderArea">
                        <button className="btn">Log in</button>
                    </Link>
                    <div className="forget">
                        <a href="forget">Forgotten password?</a>
                        <br></br>
                    </div>
                </div>

                <div className="create">
                    <br></br>
                    <button className="btns">Create New Account</button>
                </div>

                <p></p>
                <br></br>
                <div className="page">
                    <a href="createpage">Create a page </a> for a celebrity, brand or business.
                </div>
            </div>
        </div>
    );
}

export default LoginPage;
