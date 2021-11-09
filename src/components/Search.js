import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

const Search = ({handleSearchNote}) => {
    return (
        <div className="search">
            <SearchIcon size="medium" className="search-icons"/>
            <input type="text" placeholder="Type to search notes...." onChange={(event)=>handleSearchNote(event.target.value)} />
        </div>
    )
}

export default Search
