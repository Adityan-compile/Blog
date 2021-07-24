import React, { lazy } from 'react';

const SignupForm = lazy(()=>import('../components/signupForm'));

function Signup() {
    return (
        <div className="p-4">
            <h1 className="text-center title-text fw-bold">Sign Up</h1>
            <SignupForm />
        </div>
    )
}

export default Signup;
