
import "./style.css";

const Buttons = ({ tasks, toggleHideDone, setTasksDone, hideDone }) => (
    <div className="buttons">
      {tasks.length > 0 && (
      <>
        <button onClick={toggleHideDone} className="button button__teal">
          {hideDone ? "Pokaż ukończone" : "Ukryj Ukończone"}
        </button>
        <button
          onClick={setTasksDone}
          className="button button__teal"
          disabled={tasks.every(({ done }) => done)}
        >
          Ukończ wszystkie
        </button>
      </>
      )}
    </div>
);

export default Buttons;