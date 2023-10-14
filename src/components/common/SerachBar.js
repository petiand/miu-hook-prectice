import {TextField} from '@mui/material'
import { useRef } from 'react'

import BaseBtn from './BaseBtn'

export default function SearchBar ({search, setSearch}) {

    const onChangeSerchBar = (e) => setSearch(e.target.value)

    const searchBarRef = useRef()

    const focusToSearchBar = () => searchBarRef.current.focus()

    return (
        <>
            <TextField
                sx={{width:450, mb:5 }}
                value={search} 
                inputRef={searchBarRef} 
                onChange={onChangeSerchBar} 
                id="search-bar" 
                label="Type to Search" 
            />
            <BaseBtn
                text="Click to focus the searchbar"
                onClick={focusToSearchBar}
                width="150px"
            />
        </>
    )
}