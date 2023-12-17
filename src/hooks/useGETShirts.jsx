import { useEffect } from "react";
import { useState } from "react";


export default function useGETShirts () {
    const [getShirts,setGetShirts] = useState({
        shirts:[],
        error: null,
        loader:false
    })
    const apiCall = async () => {
        try {
                setGetShirts({
                    ...getShirts,
                    loader:true
                })
                const res = await fetch('shirt.json')
                const data = await res.json()
                setGetShirts({
                    ...getShirts,
                    loader:false,
                    shirts:data
                })
        } catch (error) {
            setGetShirts({
                ...getShirts,
                loader:false,
                error:error?.message
            })
        }
    }
    useEffect(()=> {
        apiCall()
    },[])


    return getShirts;
}