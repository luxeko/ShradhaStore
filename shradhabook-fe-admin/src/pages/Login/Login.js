import React, {useState} from 'react';
import './login.scss'
import avatar from '../../assets/admin_avatar.png'
import book10 from '../../assets/books/book10.png'
import book15 from '../../assets/books/book15.png'
import book20 from '../../assets/books/book20.png'

const Login = () => {
    return (
        <main>
            <div className={`box`}>
                <div className="inner-box">
                    <div className="forms-wrap">
                        <form autoComplete={`off`} className={`sign-in-form`}>
                            <div className="logo">
                                <img src={avatar} alt={``}/>
                                <h4 className={``}>Shradha Admin</h4>
                            </div>
                            <div className="heading">
                                <h2 className={``}>Welcome Back</h2>
                                <h6 className={``}>Not Registered Yet?</h6>
                                <a className={`toggle`}>Sign Up</a>
                            </div>
                            <div className="actual-form">
                                <div className="input-wrap">
                                    <input type={`email`}
                                           name={`email`}
                                           id={`email`}
                                           className={`input-field`}
                                           autoComplete={`off`}
                                           required={true}/>
                                    <label htmlFor={`email`}>Email</label>
                                </div>
                                <div className="input-wrap">
                                    <input type={`password`}
                                           id={`password`}
                                           name={`password`}
                                           minLength={4} className={`input-field`} autoComplete={`off`}
                                           required={true}/>
                                    <label htmlFor={`password`}>Password</label>
                                </div>
                                <input type={`submit`} value={`Sign In`} className={`sign-btn`}/>
                                <p className={`text`}>Forgot password? <br/>
                                    <a>Get Help</a> Signing In
                                </p>
                            </div>
                        </form>
                        <form autoComplete={`off`} className={`sign-up-form`}>
                            <div className="logo">
                                <img src={avatar} alt={``} className={``}/>
                                <h4 className={``}>BTC World</h4>
                            </div>
                            <div className="heading">
                                <h2 className={``}>Get Started</h2>
                                <h6 className={``}>Already Have An Account?</h6>
                                <a className={`toggle`}>Sign In</a>
                            </div>
                            <div className="actual-form">
                                <div className="input-wrap">
                                    <input type={`text`}
                                           name={`username`}
                                           id={`username`}
                                           minLength={4}
                                           className={`input-field`}
                                           autoComplete={`off`}
                                           required={true}/>
                                    <label htmlFor={`username`}>Name</label>
                                </div>
                                <div className="input-wrap">
                                    <input type={`email`}
                                           name={`email`}
                                           id={`email`}
                                           minLength={4}
                                           className={`input-field`}
                                           autoComplete={`off`}
                                           required={true}/>
                                    <label htmlFor={`email`}>Email</label>
                                </div>
                                <div className="input-wrap">
                                    <input type={`password`}
                                           id={`password`}
                                           name={`password`}
                                           minLength={4}
                                           className={`input-field`}
                                           autoComplete={`off`}
                                           required={true}/>
                                    <label htmlFor={`password`}>Password</label>
                                </div>
                                <div className="input-wrap">
                                    <input type={`password`}
                                           id={`confirm-password`}
                                           name={`confirm-password`}
                                           minLength={4}
                                           className={`input-field`}
                                           autoComplete={`off`}
                                           required={true}/>
                                    <label htmlFor={`confirm-password`}>Password</label>
                                </div>
                                <input type={`submit`} className={`sign-in`}/>
                                <p className={`text`}>By Signing Up, I agree tp the
                                    <a>Terms and Conditions</a> and
                                    <a>Privacy and Policy</a>
                                </p>
                            </div>
                        </form>
                    </div>
                    <div className="carousel">
                        <div className="images-wrapper">
                            <img src={book10} alt={``} className={`image img-1 show`}/>
                            <img src={book15} alt={``} className={`image img-2`}/>
                            <img src={book20} alt={``} className={`image img-3`}/>
                        </div>
                        <div className="text-slider">
                            <div className="text-wrap">
                                <div className="text-group">
                                    <h2>Safest Crypto Network</h2>
                                    <h2>Easy Payments</h2>
                                    <h2>Daily Updates</h2>
                                </div>
                            </div>
                            <div className="bullets">
                                <span className={`active`} data-value="1"></span>
                                <span className={``} data-value="2"></span>
                                <span className={``} data-value="3"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Login;