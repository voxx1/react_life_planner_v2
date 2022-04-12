import { useState, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import AuthContext from '../../store/auth-context';
import classes from './AuthForm.module.css';

const AuthForm = () => {

    const emailInputRef = useRef();
    const passwordInputRef = useRef();
    let navigate = useNavigate();

    const authCtx = useContext(AuthContext);

    const [isLogin, setIsLogin] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
    };

    const submitHandler = (event) => {
        event.preventDefault();

        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;

        setIsLoading(true);
        let url;
        if (isLogin) {
            url =
                'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDfBQRcSA2FoRMFgLJs_RnL-7tBN4KisH4';
        } else {
            url =
                'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDfBQRcSA2FoRMFgLJs_RnL-7tBN4KisH4';
        }
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                email: enteredEmail,
                password: enteredPassword,
                returnSecureToken: true,
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
            .then((res) => {
                setIsLoading(false);
                if (res.ok) {
                    return res.json();
                } else {
                    return res.json().then((data) => {
                        let errorMessage = 'Authentication failed!';

                        throw new Error(errorMessage);
                    });
                }
            })
            .then((data) => {
                authCtx.login(data.idToken);
                navigate("/spending")
            })
            .catch((err) => {
                alert(err.message);
            });
    };

    return (
        <div className={classes.background} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <section className={classes.auth}>
                <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
                <form onSubmit={submitHandler}>
                    <div className={classes.control}>
                        <label htmlFor='email'>Your Email</label>
                        <input type='email' id='email' required ref={emailInputRef} />
                    </div>
                    <div className={classes.control}>
                        <label htmlFor='password'>Your Password</label>
                        <input
                            type='password'
                            id='password'
                            required
                            ref={passwordInputRef}
                        />
                    </div>
                    <div className={classes.actions}>
                        {!isLoading && (
                            <button>{isLogin ? 'Login' : 'Create Account'}</button>
                        )}
                        {isLoading && <p>Sending request...</p>}
                        <button
                            type='button'
                            className={classes.toggle}
                            onClick={switchAuthModeHandler}
                        >
                            {isLogin ? 'Create new account' : 'Login with existing account'}
                        </button>
                        <p style={{ marginTop: "15px" }}>For testing purpose use email - test@test.pl and password test123 or create your own account clicking text above :)</p>
                    </div>
                </form>
            </section>
        </div>

    );
};

export default AuthForm;
