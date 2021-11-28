import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectLoading } from "../tasksSlice";
import { Button, StyledButtons } from "./styled";

const SampleTasks = () => {
    const dispatch = useDispatch();
    const loading = useSelector(selectLoading)

    return (
        <StyledButtons>
            <Button onClick={() => dispatch(fetchExampleTasks())}>
                {loading ? "Ładowanie..." : "Pobierz przykłądowe zadania"}
            </Button>
        </StyledButtons>
    )
};

export default SampleTasks;