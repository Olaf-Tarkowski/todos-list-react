import "./style.css";

const Form = (props) => (
    <form className="form">
        <input className="form__newTasks" type="text" placeholder="Co jest do zrobienia?" required />
        <button className="form__button form__button--action">Dodaj zadanie</button>
    </form>
);

export default Form;