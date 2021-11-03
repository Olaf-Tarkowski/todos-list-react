import { useState } from "react";
import { StyledForm, NewTasks, StyledButton } from "./styled"
import { useFocus } from "./useFocus";
import { useDispatch } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { addTask } from "../tasksSlice";

const Form = () => {
    const { inputRef } = useFocus();

    const onFormSubmit = (event) => {
        event.preventDefault();
        setNewTaskContent("")
        if (newTask.trim() !== "") {
            return dispatch(addTask({
                content: newTask,
                done: false,
                id: nanoid(),
            }))
        }
    };
    const dispatch = useDispatch();
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