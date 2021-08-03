import "./style.css";

const Tasks = ({ tasks, hideDone, removeTask, toggleDone}) => (
  <ul className="list">
    {tasks.map(task =>
      <li key={task.id} className={`list__item ${task.done && hideDone ? "list__item--hidden" : ""}`}>
        <button onClick={() => toggleDone(task.id)} className="list__button list__button--green">
          {task.done ? "✔" : ""}
        </button>
        <span className={`list__position ${task.done ? "list__item--done" : ""}`}>
          {task.id} - {task.content}
        </span>
        <button onClick={ () => removeTask(task.id)}className={`list__button list__button--red`}>
          🗑
        </button>
      </li>)}
  </ul>
);

export default Tasks;