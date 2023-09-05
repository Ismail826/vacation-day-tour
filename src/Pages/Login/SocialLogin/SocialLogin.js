import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import google from '../../../images/social/google.png'
import github from '../../../images/social/github.png'
import facebook from '../../../images/social/facebook.png'
import { useNavigate } from 'react-router-dom';
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate();

    if (user || user1) {
        return (
            navigate('/home')
        );
    }
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '2px' }} className='bg-primary w-50 text-center mx-auto'></div>
                <p className='mt-2 px-2'>Or</p>
                <div style={{ height: '2px' }} className='bg-primary w-50 text-center mx-auto'></div>
            </div>

            <div>
                <button onClick={() => signInWithGoogle()} className='btn btn-info w-25 my-2 d-block mx-auto'>
                    <img style={{ width: '30px' }} src={google} alt='' />
                    <small className='px-2'>Google SignIn</small>
                </button>

                <button onClick={() => signInWithGithub()} className='btn btn-info w-25 my-2 d-block mx-auto'>
                    <img style={{ width: '30px' }} src={github} alt='' />
                    <small className='px-2'>GitHub SignIn</small>
                </button>

                <button className='btn btn-info w-25  my-2 d-block mx-auto'>
                    <img style={{ width: '35px' }} src={facebook} alt='' />
                    <small className=''>Facebook SignIn</small>
                </button>

            </div>

        </div>
    );
};

export default SocialLogin;