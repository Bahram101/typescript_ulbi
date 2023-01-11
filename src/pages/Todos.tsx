import { FC, useEffect, useState } from "react";
import List from "../components/List";
import axios from "axios";
import { ITodo } from "../types/types";
import TodoItem from "../components/TodoItem";

const Todos: FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    getTodos();
  }, []);

  async function getTodos() {
    try {
      const res = await axios.get<ITodo[]>(
        "https://jsonplaceholder.typicode.com/todos?_limit=15"
      );
      setTodos(res.data);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <List
      items={todos}
      renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
    />
  );
};

export default Todos;
