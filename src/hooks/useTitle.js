import { useEffect } from "react"


const useTitle = (title) =>{
    useEffect(() =>{
        document.title = `${title} | Event Explorer`
    })

}

export default useTitle