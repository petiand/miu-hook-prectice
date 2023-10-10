import {TextField, Box} from '@mui/material'
import { useRef } from 'react'

import BaseBtn from './BaseBtn'
import { usePokemon } from '../hooks/usePokemon'
import ContextValue from './ContextValue'

export default function SearchBar ({search, setSearch}) {

    const onChangeSerchBar = (e) => setSearch(e.target.value)

    const searchBarRef = useRef()

    const focusToSearchBar = () => searchBarRef.current.focus()

    const {value, setValue} = usePokemon()

    const onChangeContextBar = (e) => setValue(e.target.value)

    return (
        <>
        <Box
            sx ={
                {my:5, 
                    display:"flex", 
                    flexDirection:"column", 
                    alignItems:"center", 
                    justifyContent:'center'}}
        >
            <TextField 
                sx={{width:450, 
                    mb:5, 
                    borderColor:"#003049"
                }}
                value={search} 
                inputRef={searchBarRef} 
                onChange={onChangeSerchBar} 
                id="search-bar" 
                label="Type to Search" 
                type="search" 
            />
            <TextField 
                sx={{
                    width:450, 
                    mb:5, 
                }}
                value={value}  
                onChange={onChangeContextBar} 
                id="context-bar" 
                label="Typa global context" 
                type="text" 
            />
            <BaseBtn
                text="Click to focus the searchbar"
                onClick={focusToSearchBar}
                width="150px"
            />
        </Box>
        <ContextValue 
            color="#fdf0d5"
            bgcolor="#003049"
            position="absolute"
            top= "150px"
            left= "30px"
        />
        </>
    )
}