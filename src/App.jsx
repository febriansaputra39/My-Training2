import { useState } from "react";
import FormTugas from "./FormTugas";
import DaftarTugas from "./DaftarTugas";
import "./App.css";

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (inputValue.trim() === "") return;

    setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }]);
    setInputValue("");
  };

  const handleDeleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggleComplete = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  return (
    <div className="app-container">
      <h1>Aplikasi Todo </h1>
      <FormTugas handleSubmit={handleAddTodo} inputValue={inputValue} setInputValue={setInputValue} />
      <DaftarTugas todos={todos} handleDeleteTodo={handleDeleteTodo} handleToggleComplete={handleToggleComplete} />
    </div>
  );
}

export default App;
