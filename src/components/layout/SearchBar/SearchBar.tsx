import React, { Dispatch, useRef, useState } from 'react'
/* STYLES */
import { Wrapper } from './SearchBar.style'

type Props = {
  query: string;
  setQuery: Dispatch<string>;
  handleSearch: (e: React.KeyboardEvent) => void;
}

const SearchBar: React.FC<Props> = ({query, setQuery, handleSearch}) => {
  const [isActive, setIsActive] = useState<boolean>(false)
  const searchInput = useRef<HTMLInputElement>(null)
  const handleClick = () => {
    setIsActive(!isActive)
    if (searchInput.current) {
      searchInput.current.focus()
    }
  }

  return (
    <Wrapper className={isActive ? 'active' : ''}>
      <input
        type="text"
        placeholder="Search"
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        onKeyPress={handleSearch}
        ref={searchInput}
      />
      <button onClick={handleClick}>
        <i className={isActive ? 'fas fa-times' : 'fas fa-search'}/>
      </button>
    </Wrapper>
  )
}

export default SearchBar
