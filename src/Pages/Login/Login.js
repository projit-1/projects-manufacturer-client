import React from 'react';
import { useForm } from "react-hook-form";
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    if (user) {
        console.log(user)
    }

    const onSubmit = data => console.log(data);
    return (
        <div className='flex justify-center items-center h-screen '>

            <div class="card w-96 bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 className='text-center text-2xl text-blue-500'>Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input {...register("firstName", { required: true })} />
                        {errors.firstName?.type === 'required' && "First name is required"}

                        <input {...register("lastName", { required: true })} />
                        {errors.lastName && "Last name is required"}

                        <input type="submit" />
                    </form>
                    <div class="divider">OR</div>
                    <button onClick={() => signInWithGoogle()}
                        class="btn btn-outline"
                    >Continue with Google</button>
                </div>
            </div>


            {/* <form onSubmit={handleSubmit(onSubmit)}>
                <input {...register("firstName", { required: true, maxLength: 20 })} />
                <input {...register("lastName", { pattern: /^[A-Za-z]+$/i })} />
                <input type="number" {...register("age", { min: 18, max: 99 })} />
                <input type="submit" />
            </form> */}

        </div>
    );
};

export default Login;