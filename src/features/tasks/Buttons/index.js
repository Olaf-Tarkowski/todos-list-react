import { useDispatch, useSelector } from "react-redux";
import { StyledButtons, Button } from "./styled";
import { selectTasks, toggleHideDone, setAllDone } from "../tasksSlice"

const Buttons = () => {
  const dispatch = useDispatch();
  const { tasks, hideDone } = useSelector(selectTasks);
  return (
    <StyledButtons>
      {tasks.length > 0 && (
        <>
          <Button
            onClick={() => dispatch(toggleHideDone())}
            disabled={tasks.every(({ done }) => !done)}
          >
            {hideDone ? "Pokaż ukończone" : "Ukryj Ukończone"}
          </Button>
          <Button
            onClick={() => dispatch(setAllDone())}
            disabled={tasks.every(({ done }) => done)}
          >
            Ukończ wszystkie
          </Button>
        </>
      )}
    </StyledButtons>
  )
};

export default Buttons;