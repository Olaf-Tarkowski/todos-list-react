import { List, Item, StyledButton, Content } from "./styled"

const Tasks = ({ tasks, hideDone, removeTask, toggleDone }) => (
  <List>
    {tasks.map(task => (
      <Item key={task.id} hidden={task.done && hideDone}>
        <StyledButton green onClick={() => toggleDone(task.id)}>
          {task.done ? "✔" : ""}
        </StyledButton>
        <Content done={task.done}>
          {task.id} - {task.content}
        </Content>
        <StyledButton red onClick={() => removeTask(task.id)}>
          🗑
        </StyledButton>
      </Item>))}
  </List>
);

export default Tasks;