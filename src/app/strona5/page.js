"use client"

import RestCountries from "@/components/RestCountries";
import { useState, useEffect} from "react";

export default function Countries(){

const [data, setData]= useState(null)
const [error, setError]= useState(false)
const [loading, setLoading]= useState(true)


useEffect(()=>{

const getData = async()=>{

    try{

        const response = await fetch('https://restcountries.com/v3.1/all')
        const dataJson = await response.json()
        setData(dataJson)
        console.log(dataJson)
    }
    
    catch(error){
        setError(true)
        console.log(error)
    }
    
    finally{
        setLoading(false)
    }
}
getData()

},[])


return(

<div className="flex flex-wrap gap-8 p-8">

<h1>{error && "Nie udalo sie pobrac danych"}</h1>
<h1>{loading&& "Trwa ładowanie"}</h1>

{data && data.map((kraj, idx)=>
<RestCountries key={idx} kraj = {kraj}/>
)}

</div>

)}


