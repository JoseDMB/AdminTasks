import { useEffect } from "react";
import { useTasks } from "../context/TaskContext";
import TaskCard from "../components/TaskCard";

function TaskPage(){
   const {getTasks, tasks} = useTasks();

   useEffect(()=>{
    getTasks();
    },[]) 

    if (tasks.length === 0) return (<h1 className="text-9xl text-white flex h-[calc(100vh-100px)] items-center justify-center">No tasks</h1>);
   
    return( 
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2 text-white">
            {tasks.map((task) =>(
                <TaskCard 
                    task={task}
                    key={task._id}
                />
            ))}
        </div>
    );
};

export default TaskPage;