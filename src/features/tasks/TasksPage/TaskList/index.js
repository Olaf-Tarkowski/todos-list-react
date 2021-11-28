import { useDispatch, useSelector } from "react-redux";
import {  useLocation } from "react-router-dom";
import { selectHideDone, toggleTaskDone, removeTask, selectTasksByQuery } from "../../tasksSlice";
import searchQueryParamName from "../searchQueryParamName";
import { List, Item, StyledButton, Content, StyledLink } from "./styled"

const TaskList = () => {
  const location = useLocation();
  const query = (new URLSearchParams(location.search)).get(searchQueryParamName);

  const dispatch = useDispatch();
  const tasks = useSelector(state => selectTasksByQuery(state, query));
  const hideDone = useSelector(selectHideDone);

  return (
    <List>
      {tasks.map(task => (
        <Item key={task.id} hidden={task.done && hideDone}>
          <StyledButton green onClick={() => dispatch(toggleTaskDone(task.id))}>
            {task.done ? "✔" : ""}
          </StyledButton>
          <Content done={task.done}>
            <StyledLink to={`/zadania/${task.id}`}>{task.content}</StyledLink>
          </Content>
          <StyledButton red onClick={() => dispatch(removeTask(task.id))}>
            🗑
          </StyledButton>
        </Item>))}
    </List>
  )
};

export default TaskList;