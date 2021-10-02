import { List, Item, StyledButton, Content } from "./styled"

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
  <List>
    {tasks.map(task => (
      <Item key={task.id} hidden={task.done && hideDone}>
        <StyledButton green onClick={() => toggleTaskDone(task.id)}>
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