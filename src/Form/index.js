import { useState } from "react";
import "./style.css";

const Form = ({addNewTaskContent}) => {
    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskContent.trim() !== "") {
            return addNewTaskContent(newTaskContent)
        }return setNewTaskContent("")
    };
    const [newTaskContent, setNewTaskContent] = useState("");
    return (
        <form onSubmit={onFormSubmit} className="form">
            <input value={newTaskContent} onChange={(event) => setNewTaskContent(event.target.value)} className="form__newTasks" type="text" placeholder="Co jest do zrobienia?"  required/>
            <button className="form__button form__button--action">Dodaj zadanie</button>
        </form>
    );
}

export default Form;