import { useSelector } from "react-redux";
import { useParams } from "react-router";
import Container from "../../../common/Container";
import Header from "../../../common/Header";
import Section from "../../../common/Section";
import { StyledHeader } from "../../../common/Section/styled";
import { getTaskById } from "../tasksSlice";

const TaskPage = () => {
    const { id } = useParams();
    const task = useSelector(state => getTaskById(state, id));

    return (
        <Container>
            <Header
                title="Szczegóły zadania"
            />
            <Section
                title={task ? task.content : "Nie znaleziono zadania"}
                body={<>
                    <StyledHeader>
                        Ukończone: {task ? task.done ? "Tak" : "Nie" : "Brak wyników"}
                    </StyledHeader></>}
            />
        </Container>
    );
};

export default TaskPage;