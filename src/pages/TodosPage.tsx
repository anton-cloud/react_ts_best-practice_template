import axios from "axios";
import React, { useEffect, useState } from "react";
import List from "../components/List";
import TodoItem from "../components/TodoItem";
import { ITodo } from "../types/types";

const TodosPage = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  useEffect(() => {
    fetchTodos();
  }, []);

  async function fetchTodos() {
    try {
      const response = await axios.get<ITodo[]>(
        "https://jsonplaceholder.typicode.com/todos?_limit=10"
      );
      setTodos(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <List
      items={todos}
      renterItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
    />
  );
};

export default TodosPage;
