import type { Task } from "../task/task.type";
import { TaskCheck } from "./task-check";

export function TaskCard({task}:{task:Task}) {
    return(
        <div>
            <h2>
                <TaskCheck task = {task} /> {task.title} 
            </h2>
            <h3>
                {task.description}
            </h3>
        </div>
    )
}