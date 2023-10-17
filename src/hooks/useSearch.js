import { useEffect, useState } from "react"

const useSearch = ({value}) => {

    const [localSearch, setLocalSearch] = useState("")

    const onChange = (e) => setLocalSearch(e.target.value)

    useEffect(() => {
        const searchTimeOutId = setTimeout(() => setLocalSearch(localSearch),500)
        return () =>
            clearTimeout(searchTimeOutId)
    },[localSearch])
    
return {onChange, localSearch}
}



export default useSearch

