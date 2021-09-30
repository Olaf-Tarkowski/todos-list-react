import { useRef, useState } from "react";
import { StyledForm, NewTasks, StyledButton } from "./styled"

const Form = ({ addNewTaskContent }) => {
    const inputRef = useRef(null);
    const focusInput = () => {
        inputRef.current.focus()
    };

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
            <NewTasks ref={inputRef} value={newTaskContent} onChange={(event) => setNewTaskContent(event.target.value)} type="text" placeholder="Co jest do zrobienia?" />
            <StyledButton onClick={focusInput}>
                Dodaj zadanie
            </StyledButton>
        </StyledForm>
    );
}

export default Form;