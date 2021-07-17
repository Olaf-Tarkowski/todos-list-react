import "./style.css";

const Tasks = ({ tasks, hideDoneTasks}) => (
  <ul className="list">
    {tasks.map(task =>
      <li key={task.id} className={`list__item ${task.done && hideDoneTasks ? "list__item--hidden" : ""}`}>
        <button className="list__button list__button--green">
          {task.done ? "✔" : ""}
        </button>
        <span className={`list__position ${task.done ? "list__item--done" : ""}`}>
          {task.content}
        </span>
        <button className={`list__button list__button--red`}>
          🗑
        </button>
      </li>)}
  </ul>
);

export default Tasks;