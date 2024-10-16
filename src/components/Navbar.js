import Link from 'next/link'

export default function Navbar(){


return(

<div className = "flex justify-center gap-8">

<Link className="text-white font-bold" href="/" >Home</Link>
<Link className="text-yellow-400 font-bold" href="strona1" >Strona1</Link>
<Link className="text-red-400 font-bold" href="strona2" >Strona2</Link>
<Link className="text-green-400 font-bold" href="strona3" >Strona3</Link>
<Link className="text-blue-400 font-bold" href="strona4" >Strona4</Link>
<Link className="text-purple-400 font-bold" href="strona5" >Strona5</Link>



</div>



)







}

