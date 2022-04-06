import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login(){
        return(
                <div className="containerlogin">
                        <div className="logobox">  
                            <img src="Logo-v4.png"/>
                        </div>
                        
                        
                        <div className="Formbox">
                            <form>
                                    <div className="labelbox">
                                        <label className="l1">
                                            username
                                        </label>
                                    </div>
                                    
                                    
                                    <div className="inputbox">
                                            <input type="email" placeholder="@esi-sba.dz"/>
                                    </div>

                                    
                                    <div className="labelbox">
                                            <label>password</label>   
                                    </div> 
                                    
                                    
                                    <div className="inputbox">
                                            <input type="password" placeholder="password"/>
                                    </div>
                                    
                                    
                                    <div className="buttonbox">
                                            <button type="submit">Login</button>
                                    </div>
                                    
                                    
                                    <div className="labelbox0">
                                            <label><Link to="/Signin" className="Link">Click</Link> here if you forgot your password or you want to sign in</label>
                                    </div>
                            </form>
                        </div>
                </div>
        );
}
export default Login;