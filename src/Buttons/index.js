
import "./style.css";

const Buttons = ({ tasks, hideDoneTask }) => (

    <span className="buttons">
      {tasks.length > 0 && (
      <>
        <button className="button button__teal">
          {hideDoneTask ? "Pokaż ukończone" : "Ukryj Ukończone"}
        </button>
        <button
          className="button button__teal"
          disabled={tasks.every(({ done }) => done)}
        >
          Ukończ wszystkie
        </button>
      </>
      )}
    </span>

);

export default Buttons;