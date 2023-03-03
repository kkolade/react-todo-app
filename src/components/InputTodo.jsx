const InputTodo = () => {
  return (
    <>
      <form className="form-container">
        {/* <form onSubmit={handleSubmit} className="form-container"> */}
        <input
          // ...
          className="input-text"
        />
        <button className="input-submit">Submit</button>
      </form>
      <span className="submit-warning"></span>
      {/* <span className="submit-warning">{message}</span> */}
    </>
  );
};
export default InputTodo;
