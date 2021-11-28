import { useHistory, useLocation } from "react-router";
import searchQueryParamName from "../searchQueryParamName";
import { TaskSearch, StyledSearch } from "./styled"

const Search = () => {
  const location = useLocation();
  const query = (new URLSearchParams(location.search)).get(searchQueryParamName);
  const history = useHistory();
  
  const onInputChange = ({ target }) => {
    const searchParams = new URLSearchParams(location.search);
    if (target.value.trim() === "") {
      searchParams.delete(searchQueryParamName)
    } else {
      searchParams.set(searchQueryParamName, target.value);
    }
    history.push(`${location.pathname}?${searchParams.toString()}`)
  }

  return (
    <StyledSearch>
      <TaskSearch placeholder="Filtruj zadania" value={query || ""} onChange={onInputChange} />
    </StyledSearch>
  );
}

export default Search;