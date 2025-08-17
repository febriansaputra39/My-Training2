function DaftarTugas({ todos, handleToggleComplete, handleDeleteTodo }) {
  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className={todo.completed ? "completed" : ""}>
          <span onClick={() => handleToggleComplete(todo.id)}>{todo.text}</span>
          <button onClick={() => handleDeleteTodo(todo.id)} className="delete-button">
            Hapus
          </button>
        </li>
      ))}
    </ul>
  );
}

export default DaftarTugas;
