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
                <h1 className="text-3xl text-white font-bold">{task.title}</h1>
                <div className="flex gap-x-2 items-center">
                    <button 
                    className="bg-red-600 hover:bg-red-800 rounded-md text-white px-4 py-2" onClick={()=>{
                        deleteTask(task._id);
                    }}>Delete</button>
                    <Link to={`/tasks/${task._id}`} className="bg-blue-500 hover:bg-blue-700  rounded-md text-white px-4 py-2"> Edit</Link>        
                </div>
            </header>
            <p className="text-white">Description task: {task.description}</p>
            <p>Date: {dayjs(task.date).utc().format("DD/MM/YYYY")}</p>
            
        </div> 
    )
 }
 export default TaskCard; 