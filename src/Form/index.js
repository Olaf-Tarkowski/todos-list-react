import { useState } from "react";
import { StyledForm, NewTasks, StyledButton } from "./styled"

const Form = ({ addNewTaskContent }) => {
    const onFormSubmit = (event) => {
        event.preventDefault();
        setNewTaskContent("")
        if (newTaskContent.trim() !== "") {
            return addNewTaskContent(newTaskContent)
        }
    };
    const [newTaskContent, setNewTaskContent] = useState("");
    return (
        <StyledForm onSubmit={onFormSubmit}>
            <NewTasks value={newTaskContent} onChange={(event) => setNewTaskContent(event.target.value)} type="text" placeholder="Co jest do zrobienia?" required />
            <StyledButton>
                Dodaj zadanie
            </StyledButton>
        </StyledForm>
    );
}

export default Form;