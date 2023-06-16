import { useEffect,useState } from "react";


function UseEffect(){

    const [count,setCount] = useState(0)
    const [count2,setCount2] = useState(0)


  useEffect(()=>{
   setCount(count + 1)

    
  },[count2])




return(
    <div>
        {count}
        <button onClick={()=>{setCount2(count2 + 1)}}>button</button>
        {count2}
    </div>
)
}

export default UseEffect