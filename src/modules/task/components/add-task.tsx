export function AddTask() {
  return (
    <div className="max-w-xl mx-auto bg-orange-300">
      <h1 className="text-3xl mx-2 py-2 text-center font-bold">
        Task Management
      </h1>
      <div className="border mx-2">
        <h3 className="text-xl mx-2 my-2">Add New Task</h3>
        <form className="flex">
          <input
            type="text"
            placeholder="Task Name"
            className="mx-2 bg-gray-100"
          />
        </form>
        <form className="flex">
          <input
            type="text"
            placeholder="Task Description"
            className="m-2 bg-gray-100"
          />
        </form>
      </div>
    </div>
  );
}
