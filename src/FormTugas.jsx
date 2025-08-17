function FormTugas({ handleSubmit, inputValue, setInputValue }) {
  return (
    <form onSubmit={handleSubmit} className="todo-form">
      <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="Masukkan todo..." />
      <button type="submit">Tambah</button>
    </form>
  );
}

export default FormTugas;
