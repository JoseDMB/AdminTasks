import {Link} from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar(){
    const {isAuthenticated,logout,user}= useAuth();
    return(
        <nav className="bg-violet-950 my-3 flex justify-between py-5 px-10 rounded-lg">
            <Link to={isAuthenticated ? "/tasks":"/"
                
            }>
                    <h1 className="text-violet-50 font-bold text-3xl">Task Manager</h1>  
            </Link>
            <ul className="flex gap-x-2 text-white">
                {isAuthenticated ? (
                    <>
                     <li className=" text-violet-50 text-2xl">
                           Hi
                        </li>
                        <li className="text-violet-50 text-2xl font-bold">
                            <h1>{user.username}! </h1>
                        </li>
                        
                        <li>
                            <Link to = '/add-task' className="bg-violet-50 text-violet-950 px-4 py-1 text-xl font-bold hover:bg-violet-300 rounded-md">Add Task</Link>
                        </li>
                        <li>
                            <Link to = '/tasks' className="bg-violet-50 text-violet-950 px-4 py-1 text-xl font-bold hover:bg-violet-300 rounded-md">See Tasks</Link>
                        </li>
                        <li>
                            <Link to = '/' onClick={()=>{
                                logout();
                            }} className="bg-violet-950 text-lime-400 px-4 py-1 text-xl font-bold hover:bg-violet-900 rounded-md">Logout
                            </Link>
                        </li>
                       
                    </>
                ):(
                    <>
                        <li>
                            <Link to = '/login' className="bg-violet-50 text-violet-950 px-4 py-1 text-xl font-bold hover:bg-violet-300 rounded-md">Login</Link>
                        </li>
                        <li>
                            <Link to = '/register' className="bg-violet-50 text-violet-950 px-4 py-1 text-xl font-bold hover:bg-violet-300 rounded-md">Register</Link>
                        </li>
                    </>
                )}
            </ul>

        </nav>
    )
}

export default Navbar;