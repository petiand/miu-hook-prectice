import { useEffect, useState } from "react";

const useFetch = ({url}) => {
   
    const [data, setData] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect( () => {
        
        setIsLoading(true)

        fetch(url)
            .then( res => res.json())
            .then(data => setData(data))
            .finally(setIsLoading(false))
        
    },[url]) 

    return [data, isLoading]
}

export default useFetch