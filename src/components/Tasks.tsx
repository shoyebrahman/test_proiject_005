import { useAppSelector } from "@/redux/hook";

const Tasks = () => {

  const tasks = useAppSelector((state) => state.todo.tasks)
  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        <li>Task 1</li>
        <li>Task 2</li>
        <li>Task 3</li>
      </ul>
    </div>
  );
};

export default Tasks;