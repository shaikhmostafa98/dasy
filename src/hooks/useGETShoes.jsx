import { useEffect } from "react";
import { useState } from "react";


export default function useGETShoes () {
    const [getShoes,setGetShoes] = useState({
        shoes:[],
        error: null,
        loader:false
    })
    const apiCall = async () => {
        try {
                setGetShoes({
                    ...getShoes,
                    loader:true
                })
                const res = await fetch('shoe.json')
                const data = await res.json()
                setGetShoes({
                    ...getShoes,
                    loader:false,
                    shoes:data
                })
        } catch (error) {
            setGetShoes({
                ...getShoes,
                loader:false,
                error:error?.message
            })
        }
    }
    useEffect(()=> {
        apiCall()
    },[])


    return getShoes;
}