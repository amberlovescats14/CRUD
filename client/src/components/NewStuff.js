import React from "react";
import { Link } from 'react-router-dom'
import { Card, Button } from 'react-bootstrap'


export default function NewStuff() {
  return (
    <div>
      <h1>new stuff</h1>
    </div>
  )
}


// let list = []
// export default function NewStuff() {
//   // const [List, setList] = useState()
//   useEffect(()=>{
//        axios.get('/music')
//     .then(res=> {
//       console.log(res.data)
//       list = [...res.data]

//     })
//   })

//   return (
//     <div>
//       <h1>NEW STUFF</h1>
//       {
//         console.log(`LIST: `, list)
//       }

//     </div>
//   )
// }
