import { useState } from "react";
import { StyledForm, NewTasks, StyledButton } from "./styled"
import { useFocus } from "./useFocus";

const Form = ({ addNewTask }) => {
    const { inputRef } = useFocus();

    const onFormSubmit = (event) => {
        event.preventDefault();
        setNewTaskContent("")
        if (newTask.trim() !== "") {
            return addNewTask(newTask)
        }
    };

    const [newTask, setNewTaskContent] = useState("");
    return (
        <StyledForm onSubmit={onFormSubmit}>
            <NewTasks ref={inputRef} value={newTask} onChange={(event) => setNewTaskContent(event.target.value)} type="text" placeholder="Co jest do zrobienia?" />
            <StyledButton>
                Dodaj zadanie
            </StyledButton>
        </StyledForm>
    );
}

export default Form;