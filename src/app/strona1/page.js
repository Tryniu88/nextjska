"use client"

import { useState } from "react";



export default function Strona1(){


const [licznik, setLicznik] = useState(0)


function dodajlicznik(){
    setLicznik(licznik + 1)
}

function odejmijlicznik(){
    setLicznik(licznik - 1)
}

return(

<div className ="flex justify-center border-3 border-white gap-3" >

<button    onClick = {dodajlicznik}>Dodaj</button>
<button    onClick = {odejmijlicznik}>Odejmij</button>

<h1>{licznik}</h1>

</div>



)



}