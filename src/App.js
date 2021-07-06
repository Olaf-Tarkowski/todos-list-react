import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const tasks = [
  { id: 1, content: "Zjeść obiad", done: false },
  { id: 2, content: "Kupić spodnie", done: true },
  { id: 3, content: "Odrobić lekcje", done: false },
  { id: 4, content: "wyjść z psem na spacer" },
];

const hideDoneTasks = false;

function App() {
  return (
    <Container>
      <Header 
        title="Lista zadań"
      />
      <Section
        title="Dodaj nowe zadanie"
        body={
          <Form />
        }
      />
      <Section
        title="Lista zadań"
        body={
          <Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />
        }
        extraHeaderContent={
          <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />
        }
      />
    </Container>

  );
}

export default App;
