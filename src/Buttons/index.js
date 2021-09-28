import { StyledButtons, Button } from "./styled";

const Buttons = ({ tasks, toggleHideDone, setTasksDone, hideDone }) => (
    <StyledButtons>
      {tasks.length > 0 && (
      <>
        <Button onClick={toggleHideDone}>
          {hideDone ? "Pokaż ukończone" : "Ukryj Ukończone"}
        </Button>
        <Button
          onClick={setTasksDone}
          disabled={tasks.every(({ done }) => done)}
        >
          Ukończ wszystkie
        </Button>
      </>
      )}
    </StyledButtons>
);

export default Buttons;