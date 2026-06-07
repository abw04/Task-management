import { TaskCard } from "./modules/components/task-card";
import { TaskData } from "./modules/task/task.data";

export default function App() {
  return (
    <div className="max-w-xl mx-auto bg-orange-300 min-h-screen">
      <h1 className="text-3xl mx-2 py-2 text-center font-bold">
        Task Management
      </h1>
      <div className="border mx-2">
        <h3 className="text-xl mx-2 my-2">Add New Task</h3>
        <form className="flex">
          <input
            type="text"
            placeholder="Task Name"
            className=" mx-2 bg-gray-100"
          />
        </form>
        <form className="flex">
          <input
            type="text"
            placeholder="Task Description"
            className=" m-2 bg-gray-100"
          />
        </form>
        <button type="submit" className="m-2 p-1 bg-gray-200 pointer">
          Submit
        </button>
      </div>
      {TaskData.map((task) => {
        return <TaskCard key={task.id} task={task} />;
      })}
    </div>
  );
}
