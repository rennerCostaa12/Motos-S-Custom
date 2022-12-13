import { useEffect, useState } from "react"
import { baseApi } from "../api/api";


export default function useCountData(urlData: string){

    const [data, setData] = useState<string>('');

    useEffect(() => {
        baseApi(`/${urlData}`)
        .then(function(response){
            setData(response.data);
        })
        .catch(function(error){
            console.log(error);
        });
    }, [])

    return data.length
}