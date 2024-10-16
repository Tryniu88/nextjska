"use client"

import { useState } from "react"

export default function Strona3(){


const[bgColor, setbgColor] = useState("bg-yellow-400")


function changebg(){

setbgColor(bgColor === "bg-yellow-400" ? "bg-orange-400" : "bg-yellow-400")


}


return(

<div className = {`${bgColor} flex justify-center h-screen`}>


<button className ="text-black"   onClick = {changebg}>Zmień Color</button>

</div>


)


}






