import { Switch, Route, Redirect, HashRouter } from "react-router-dom";
import TasksPage from "./features/tasks/TasksPage"
import Author from "./features/author/Author";
import TaskPage from "./features/tasks/TaskPage";
import { StyledList, StyledNavLink } from "./styled";

const App = () => (
    <HashRouter>
        <nav>
            <StyledList>
                <li><StyledNavLink to="/zadania">Lista zadań</StyledNavLink></li>
                <li><StyledNavLink to="/autor">O autorze</StyledNavLink></li>
            </StyledList>
        </nav>
        <Switch>
            <Route path="/zadania/:id">
                <TaskPage />
            </Route>
            <Route path="/zadania">
                <TasksPage />
            </Route>
            <Route path="/autor">
                <Author />
            </Route>
            <Redirect to="/zadania" />
        </Switch>
    </HashRouter>
);

export default App;