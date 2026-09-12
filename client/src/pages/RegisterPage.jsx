import {useForm} from 'react-hook-form';
import { useAuth } from '../context/AuthContext';
import {useEffect} from 'react';
import {useNavigate, Link} from 'react-router-dom';

function RegisterPage() {
    const {register, handleSubmit, formState: {errors}} = useForm();
    const {singup, isAuthenticated, errors: registerErrors} = useAuth();
    const navigate = useNavigate();

   useEffect(() => {
        if(isAuthenticated){
            navigate("/tasks");
        }
    }, [isAuthenticated]);
    // This callback function will be executed when the form is submitted.
    //  It receives the form values as an argument.
    const onSubmit = async (values) => {
        singup(values);
    }

     

    

    return(
        <div className ="flex h-[calc(100vh-100px)] items-center justify-center">
            {
            registerErrors.map((error, index)=>(
                <div className="bg-red-500 p-2 text-white" key={index}>
                    {error}
                </div>
            ))
            }
            <div className = "bg-zinc-800 max-w-md w-full p-10 rounded-md">
                <h1 className = "text-3xl font-bold text-white my-2">Register</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                        
                    <input type="text" placeholder="Username" 
                    {...register("username",{required: true})}
                    className="w-full bg-black text-white px-4 py-2 
                    rounded-md focus:outline-none focus:ring-2
                    focus:ring-yellow-400 focus:border-transparent my-2"
                    />
                    {
                    errors.username &&
                        <p className="text-red-500">Username is required</p> 
                    }

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
                    hover:bg-yellow-600 text-black font-bold py-2 px-4 rounded">
                    
                        Register
                    </button>
                </form>
                <p className = "flex gap-x-2 justify-center text-yellow-400 my-2">
                Alreay have an account?<Link to="/login" className="text-blue-600">Login</Link>
            </p>
            </div>
            
        </div>
    )
}
export default RegisterPage;