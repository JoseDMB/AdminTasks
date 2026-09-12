import {useForm} from 'react-hook-form';
import {useAuth} from '../context/AuthContext'
import {Link, useNavigate} from 'react-router-dom';
import { useEffect } from 'react';

function LoginPage() {
    //register
    const {register, handleSubmit, formState: {errors}} = useForm();
    //login
    const{signin, errors: signinErrors,isAuthenticated} = useAuth();
    const navigate = useNavigate();
    //Cambiado
    useEffect(() =>{
        if(isAuthenticated){navigate('/tasks')} ;
    },[isAuthenticated]);
    
    const onSubmit = handleSubmit((data) => {signin(data);});

    
    
    return(
        <div className = "flex h-[calc(100vh-100px)] items-center justify-center">

            <div className = "bg-zinc-800 max-w-md w-full p-10 rounded-md">
                {
                    signinErrors.map((error, index)=>(
                        <div className="bg-red-500 p-2 text-white my-2" key={index}>
                            {error}
                        </div>
                    ))
                }
                <h1 className = "text-3xl font-bold text-white my-2">Login</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                <input type="email" placeholder="Email" 
                {...register("email",{required: true})}
                className="w-full bg-black text-white px-4 py-2 
                rounded-md focus:outline-none focus:ring-2
                 focus:ring-yellow-400 focus:border-transparent my-2" />
                 {
                errors.email &&
                    <p className="text-red-500">Email is required</p> 
                }

                <input type="password" placeholder="Password"
                 {...register("password",{required: true})} 
                 className="w-full bg-black text-white px-4 py-2 
                rounded-md focus:outline-none focus:ring-2
                 focus:ring-yellow-400 focus:border-transparent my-2"/>
                {
                errors.password &&
                    <p className="text-red-500">Password is required</p> 
                }

                <button type="submit" className="bg-yellow-400
                 hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded flex items-center">
                    Login
                </button>
            </form>
            <p className = "flex gap-x-2 justify-center text-yellow-400">
                Don't have an account?<Link to="/register" className="text-green-500">Sign up</Link>
            </p>
            </div>
        </div>
    )
}
export default LoginPage;
