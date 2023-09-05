import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../shared/Loading/Loading';


const Register = () => {
    
    const navigate = useNavigate();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const handleRegistration =async (e) => {
        e.preventDefault();
        console.log(e.target.email.value, e.target.name.value, e.target.password.value)
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

     await   createUserWithEmailAndPassword(email, password);
        const success = await updateProfile({ displayName: name });
        if (success) {
            alert('Updated profile');
            console.log('Updated profile');
            navigate('/home')
        }
       
    }
    if(loading){
        return <Loading></Loading>
    }

    if (user) {
        console.log('user id');
        navigate('/home')
    }

    const navigateLogin = () => {
        navigate('/login')
    }

    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-center text-primary mt-2'>Please Register</h2>

            <Form onSubmit={handleRegistration}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Your Name" />

                </Form.Group>
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
            <p>New To Vacation Day Tour?<Link to='/login' onClick={navigateLogin} className='text-decoration-none'>Please Login</Link> </p>

           

            <SocialLogin></SocialLogin>
         
        </div>
    );
};

export default Register;