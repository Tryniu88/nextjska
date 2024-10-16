import Image from 'next/image'

export default function Countries({kraj}){


return(

<div className="border-2 p-8  border-red-800">

<Image

src={kraj.flags.png}
width={100}
height={100}
alt={kraj}
className="w-[200px] , h-[100px]"
/>

<h1>{kraj.name.common}</h1>

</div>

)}