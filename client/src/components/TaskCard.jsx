import { useTasks } from "../context/TaskContext";
import {Link} from 'react-router-dom';
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);
 function TaskCard({task}){
    const {deleteTask} = useTasks();
    return( 
        <div className="bg-black max-w-md w-full p-10 rounded-md">
            <header className="flex justify-between">
                <h1 className="text-4xl text-violet-50 font-bold">{task.title}</h1>
                <div className="flex gap-x-2 items-center">
                    <button 
                    className="bg-violet-950 hover:bg-violet-900 rounded-md text-violet-50 px-4 py-2 my-2" onClick={()=>{
                        deleteTask(task._id);
                    }}>Delete</button>
                    <Link to={`/tasks/${task._id}`} className="bg-violet-950 hover:bg-violet-900 rounded-md text-lime-400 px-4 py-2"> Edit</Link>        
                </div>
            </header>
            <p className="text-violet-300 text-2xl font-bold">Description task:</p><p className="text-lime-400 my-1">{task.description}</p>
            <p className="text-violet-300 text-2xl font-bold">Date:</p><p className="text-lime-400">{dayjs(task.date).utc().format("DD/MM/YYYY")}</p>
            
        </div> 
    )
 }
 export default TaskCard; 