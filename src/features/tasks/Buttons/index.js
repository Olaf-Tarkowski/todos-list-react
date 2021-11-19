import { useDispatch, useSelector } from "react-redux";
import { StyledButtons, Button } from "./styled";
import { selectHideDone, toggleHideDone, setAllDone, selectSetEveryTaskDone, selectHideDoneTasks, selectAreListEmpty, fetchExampleTasks } from "../tasksSlice"

const Buttons = () => {
  const dispatch = useDispatch();
  const hideDone = useSelector(selectHideDone);
  const setEveryTasksDone = useSelector(selectSetEveryTaskDone);
  const hideDoneTasks = useSelector(selectHideDoneTasks);
  const areListEmpty = useSelector(selectAreListEmpty);

  return (
    <StyledButtons>
      <Button onClick={() => dispatch(fetchExampleTasks())}>
      Pobierz przykładowe zadania
      </Button>
      {areListEmpty && (
        <>
          <Button
            onClick={() => dispatch(toggleHideDone())}
            disabled={hideDoneTasks}
          >
            {hideDone ? "Pokaż ukończone" : "Ukryj Ukończone"}
          </Button>
          <Button
            onClick={() => dispatch(setAllDone())}
            disabled={setEveryTasksDone}
          >
            Ukończ wszystkie
          </Button>
        </>
      )}
    </StyledButtons>
  )
};

export default Buttons;