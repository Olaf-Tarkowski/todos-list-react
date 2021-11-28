import searchQueryParamName from "../searchQueryParamName";
import { useQueryParameter, useReplaceQueryParamiter } from "../queryParamiters";
import { TaskSearch, StyledSearch } from "./styled"

const Search = () => {
  const query = useQueryParameter(searchQueryParamName);
  const replaceQueryParameter = useReplaceQueryParamiter();

  const onInputChange = ({ target }) => {
    replaceQueryParameter({
      key: searchQueryParamName,
      value: target.value.trim() !== "" ? target.value : undefined,
    });
  };

  return (
    <StyledSearch>
      <TaskSearch placeholder="Filtruj zadania" value={query || ""} onChange={onInputChange} />
    </StyledSearch>
  );
}

export default Search;