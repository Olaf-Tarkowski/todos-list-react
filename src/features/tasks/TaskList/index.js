import { useDispatch, useSelector } from "react-redux";
import { selectTasks, selectHideDone, toggleTaskDone, removeTask } from "../tasksSlice";
import { List, Item, StyledButton, Content } from "./styled"

const TaskList = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);
  const hideDone = useSelector(selectHideDone);

  return (
    <List>
      {tasks.map(task => (
        <Item key={task.id} hidden={task.done && hideDone}>
          <StyledButton green onClick={() => dispatch(toggleTaskDone(task.id))}>
            {task.done ? "✔" : ""}
          </StyledButton>
          <Content done={task.done}>
            {task.content}
          </Content>
          <StyledButton red onClick={() => dispatch(removeTask(task.id))}>
            🗑
          </StyledButton>
        </Item>))}
    </List>
  )
};

export default TaskList;