"use client"

import { useState } from "react"

export default function Strona4(){

const [Items, setItems] = useState([""])
const [Input, setInput] = useState("")


function dodaj(){

setItems ([...Items, Input])
setInput ("")

}


return(

<div className="flex justify-center  p-8 gap-8">

<input className="text-black"  type="text" value={Input} onChange ={(e) => setInput(e.target.value)} ></input>

<button className="border-4 border-white p-8" onClick={dodaj}>Dodaj Rekord</button>

<ul>

{

Items.map((item, idx)=>

<li key={idx}>{item}</li>    

)
}
</ul>
</div>

)}


