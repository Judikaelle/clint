import { Wrapper } from './SearchBar.style'
import React, { Dispatch } from 'react'

type Props = {
  query: string;
  setQuery: Dispatch<string>;
  handleSearch: (e: React.KeyboardEvent) => void;
}

const SearchBar: React.FC<Props> = ({query, setQuery, handleSearch}) => {

  return (
    <Wrapper>
      <input
        type="text"
        placeholder="Search a city..."
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        onKeyPress={handleSearch}
      />
    </Wrapper>
  )
}

export default SearchBar
