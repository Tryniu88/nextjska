"use client"

import { useState } from "react"



export default function Strona2(){

const [status, setStatus] = useState("start")


function chngst(){

setStatus(status === "start" ? "stop" : "start")

}

return(

<div className = "flex justify-center gap-5">

<button className="border-4 border-white"   onClick={chngst}>Zmień Status</button>

<h1>{status}</h1>

</div>


)


}