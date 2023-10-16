import {TextField} from '@mui/material'
import { useEffect, useRef, useState } from 'react'

import BaseBtn from './BaseBtn'

export default function SearchBar ({search, setSearch}) {

    const [localSearch, setLocalSearch] = useState("")

    const onChangeSerchBar = (e) => setLocalSearch(e.target.value)

    useEffect(() => {
        const searchTimeOutId = setTimeout(() => setSearch(localSearch),500)
        return () =>
            clearTimeout(searchTimeOutId)
    },[localSearch])

    

    const searchBarRef = useRef()

    const focusToSearchBar = () => searchBarRef.current.focus()

    return (
        <>
            <TextField
                sx={{width:450, mb:5 }}
                value={localSearch} 
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