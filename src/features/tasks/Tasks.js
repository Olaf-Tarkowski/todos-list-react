import Form from "../../features/tasks/Form";
import TaskList from "../../features/tasks/TaskList";
import Buttons from "../../features/tasks/Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";



function Tasks() {

  return (
    <Container>
      <Header
        title="Lista zadań"
      />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />
      <Section
        title="Lista zadań"
        body={<TaskList />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
}

export default Tasks;