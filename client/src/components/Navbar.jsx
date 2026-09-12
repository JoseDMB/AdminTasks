import {Link} from "react-router-dom";
import { useAuth } from "../context/AuthContext";

function Navbar(){
    const {isAuthenticated,logout,user}= useAuth();
    return(
        <nav className="bg-zinc-900 my-3 flex justify-between py-5 px-10 rounded-lg">
            <Link to={isAuthenticated ? "/tasks":"/"
                
            }>
                <h1 className="text-white font-bold">Task Manager</h1>
            </Link>
            <ul className="flex gap-x-2 text-white">
                {isAuthenticated ? (
                    <>
                        <li>
                            Welcome 
                        </li>
                        <li className="text-green-400">
                            <h1>{user.username} </h1>
                        </li>
                        <li>
                            <Link to = '/add-task' className="bg-yellow-400 text-black px-4 py-1 rounded-sm">Add Task</Link>
                        </li>
                        <li>
                            <Link to = '/tasks' className="bg-orange-400 text-black px-4 py-1 rounded-sm">See Tasks</Link>
                        </li>
                        <li>
                            <Link to = '/' onClick={()=>{
                                logout();
                            }} className="bg-red-500 px-4 py-1 rounded-sm">Logout
                            </Link>
                        </li>
                    </>
                ):(
                    <>
                        <li>
                            <Link to = '/login' className="bg-green-500 px-4 py-1 rounded-sm">Login</Link>
                        </li>
                        <li>
                            <Link to = '/register' className="bg-blue-600 px-4 py-1 rounded-sm">Register</Link>
                        </li>
                    </>
                )}
            </ul>

        </nav>
    )
}

export default Navbar;