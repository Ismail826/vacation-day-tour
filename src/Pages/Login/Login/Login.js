import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const navigate = useNavigate();

    // const emailRef = useRef('');
    // const passwordRef = useRef('');
    const [signInWithEmailAndPassword,user,loading] = useSignInWithEmailAndPassword(auth);
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";



    const handleLogin = (e) => {
        e.preventDefault();
        // const email = emailRef.current.value;
        // const password = passwordRef.current.value;

        const email =e.target.email.value;
        const password =e.target.password.value;

        signInWithEmailAndPassword(email, password);
        console.log(email,password);

        

       
    }

    if (user) {
        navigate('/home')
        // navigate(from, { replace: true });
    }
    const navigateRegister = () => {
        navigate('/register')
    }
    if (loading) {
        return (
            <div>
                <p>Loading...</p>
            </div>
        );
    }

    return(
        <div className='container w-50 mx-auto'>
            <h2 className='text-center text-primary mt-2'>Please Login</h2>

            <Form onSubmit={handleLogin}>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button className='w-50 mx-auto d-block mb-2' variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
            <p>New To Vacation Day Tour?<Link to='/register' className='text-decoration-none' onClick={navigateRegister}>Please Register</Link> </p>

            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Login;