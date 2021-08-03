import React, { useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";




function App() {
  const hideDone = false;

  const [tasks, setTasks] = useState([
    { id: 1, content: "Zjeść obiad", done: false },
    { id: 2, content: "Kupić spodnie", done: true },
    { id: 3, content: "Odrobić lekcje", done: false },
    { id: 4, content: "wyjść z psem na spacer" },
  ]);

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id))
  };
  const setTasksDone = () => {
    setTasks(tasks => tasks.map(task => ({ ...task, done: true })))
  };

  const toggleDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done }
      }
      return task;
    }))
  };

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
          <Tasks tasks={tasks} hideDone={hideDone} removeTask={removeTask} toggleDone={toggleDone} />
        }
        extraHeaderContent={
          <Buttons tasks={tasks} hideDone={hideDone} setTasksDone={setTasksDone} />
        }
      />
    </Container>

  );
}

export default App;
