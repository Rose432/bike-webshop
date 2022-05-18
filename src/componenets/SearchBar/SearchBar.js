import React from "react";

import {
  Search,
  SearchInputs,
  SearchBar as Bar,
  IconContainer,
  Icon,
  ClearIcon,
} from "./SearchBarStyle";

function SearchBar({
  placeholder,
  disabled,
  onChange,
  searchWord,
  clearInput,
  searchStringLength,
}) {
  return (
    <Search>
      <SearchInputs>
        <Bar
          type="text"
          placeholder={placeholder}
          disabled={disabled}
          onChange={onChange}
          maxLength="30"
          value={searchWord}
        />
        <IconContainer>
          {searchStringLength > 0 ? (
            <ClearIcon onClick={clearInput} />
          ) : (
            <Icon />
          )}
        </IconContainer>
      </SearchInputs>
    </Search>
  );
}

export default SearchBar;
