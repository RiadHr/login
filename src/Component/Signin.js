import React from 'react';
import { Link } from 'react-router-dom';
import './Signin.css';

function Signin(){
        return(
                <div className="containersignin">
                        <div className="logobox1">  
                            <img src="Logo-v4.png"/>
                        </div>
                        
                        
                        <div className="Formbox1">
                            <form>
                                    <div className="labelbox1">
                                        <label className="l1">
                                            username
                                        </label>
                                    </div>
                                    
                                    
                                    <div className="inputbox1">
                                            <input type="email" placeholder="@esi-sba.dz"/>
                                    </div>

                                    
                                    <div className="labelbox1">
                                            <label>password</label>   
                                    </div> 
                                    
                                    
                                    <div className="inputbox1">
                                            <input type="password" placeholder="password"/>
                                    </div>
                                    
                                    <div className="labelbox1">
                                        <label className="l1">
                                            confirme password
                                        </label>
                                    </div>
                                    
                                    
                                    <div className="inputbox1">
                                            <input type="password" placeholder="password"/>
                                    </div>

                                    <div className="labelbox1">
                                        <label className="l1">
                                            wilaya
                                        </label>
                                    </div>
                                    
                                    
                                    <div className="inputbox1">
                                            <input type="text" placeholder="wilaya"/>
                                    </div>


                                    <div className="labelbox1">
                                        <label className="l1">
                                            telephone
                                        </label>
                                    </div>
                                    
                                    
                                    <div className="inputbox1">
                                            <input type="telephone" placeholder="tel"/>
                                    </div>

                                    <div className="buttonbox1">
                                            <button type="submit">Login</button>
                                    </div>
                                    
                                    
                                    <div className="labelbox2">
                                            <label><Link to="/" className="Link1">Click</Link> here if you want login</label>
                                    </div>
                            </form>
                        </div>
                </div>
        );
}
export default Signin;