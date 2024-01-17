import { useAppSelector } from '@/redux/hooks';
import AddtodoModal from './AddtodoModal';
import TodoCard from './TodoCard';
import TodoFilter from './TodoFilter';

const TodoContainer = () => {
  const { todos } = useAppSelector((state) => state.todos);

  return (
    <div>
      <div className="flex justify-between mb-3">
        <AddtodoModal />
        <TodoFilter />
      </div>
      <div className="bg-primary-gradient w-full h-full rounded-xl p-[5px]">
        <div className="bg-white w-full p-5 h-full rounded-lg space-y-4">
          {todos.map((todo) => (
            <TodoCard
              key={todo.id}
              id={todo.id}
              title={todo.title}
              details={todo.details}
            />
          ))}
          {/* <div className="bg-white p-5 text-2xl rounded-md flex justify-center items-center">
          <p>There is no task pending</p>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
