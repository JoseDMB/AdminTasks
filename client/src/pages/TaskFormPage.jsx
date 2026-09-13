import {useForm} from "react-hook-form";
import { useTasks } from "../context/TaskContext";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
dayjs.extend(utc);

function TaskFormPage(){
    const {register, handleSubmit,setValue} = useForm();
    const{createTask,getTask, updateTask} = useTasks();
    const navigate = useNavigate();
    const params = useParams();

    useEffect(() =>{
        async function loadTask() {
            if(params.id){
            const task = await getTask(params.id);
            setValue('title',task.title);
            setValue('description',task.description);
            setValue('date',dayjs.utc(task.date).format("YYYY/MM/DD"));
        }
        }
        loadTask();
    },[])

    const onSubmit = handleSubmit((data) =>{
        const dataValid = {
            ...data,
            date: data.date ? dayjs.utc(data.date).format() : dayjs.utc().format(),
        };

        if (params.id) {
            updateTask(params.id, dataValid);
        } else {
            createTask(dataValid);
        }
        navigate('/tasks');
    })
    return(
        <div className="flex h-[calc(100vh-100px)] items-center justify-center">
            <div className="bg-violet-950 max-w-md w-full p-10 rounded-md ">
                <h1 className = "text-3xl font-bold text-violet-50 my-2">Date Task</h1>
            <form onSubmit={onSubmit}>
                <input type="text"
                placeholder = "Title"
                {...register("title")}
                className="w-full bg-black focus:outline-none focus:ring-2
                 focus:ring-lime-400 focus:border-transparent text-white px-4 py-2 rounded-md my-2 border border-violet-50"
                autoFocus
                />

                <textarea 
                    rows="3"
                    placeholder="Description"
                    {...register("description")}
                    className="w-full bg-black focus:outline-none focus:ring-2
                 focus:ring-lime-400 focus:border-transparent text-white px-4 py-2 rounded-md my-2 border border-violet-50"
                ></textarea>

                <input type="date"{...register('date')} className="w-full bg-violet-300 text-black px-4 py-2 rounded-md my-2 focus:outline-none focus:ring-2
                 focus:ring-lime-400 focus:border-transparent border border-black"/>

                <button className="bg-violet-50 px-3 py-2 rounded-md text-black hover:bg-lime-400
                ">Save</button>   
            </form>
        </div>
        </div>
        
    )
}

export default TaskFormPage;