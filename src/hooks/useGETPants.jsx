import { useEffect } from "react";
import { useState } from "react";


export default function useGETPants () {
    const [getPants,setGetPants] = useState({
        pants:[],
        error: null,
        loader:false
    })
    const apiCall = async () => {
        try {
            setGetPants({
                    ...getPants,
                    loader:true
                })
                const res = await fetch('pant.json')
                const data = await res.json()
                setGetPants({
                    ...getPants,
                    loader:false,
                    pants:data
                })
        } catch (error) {
            setGetPants({
                ...getPants,
                loader:false,
                error:error?.message
            })
        }
    }
    useEffect(()=> {
        apiCall()
    },[])


    return getPants;
}