import React from "react";
import { useRef } from "react";

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
  const inputRef = useRef(null);
  const onClick = () => {
    inputRef.current.focus();
  };

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
          ref={inputRef}
        />
        <IconContainer>
          {searchStringLength > 0 ? (
            <ClearIcon onClick={clearInput} />
          ) : (
            <Icon onClick={onClick} />
          )}
        </IconContainer>
      </SearchInputs>
    </Search>
  );
}

export default SearchBar;
