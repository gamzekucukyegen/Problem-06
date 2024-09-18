import { useState } from "react"

export default function ButtonVariants() {
  const [hover,setHover] = useState(false)
  return (
    <div className='wrapper'
    style={{display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50vh',
    
    }} >
      <button className='button-create'
      style={{color:"white",
    width: "80px",
    height: "auto",
    border: "2px solid green",
    backgroundColor: hover ? "green" : "darkgreen",
    cursor: "pointer",
    boxShadow: "0 0 10px #333",
    overflow: "hidden",
    margin:"10px",
    transition: ".3s",
    }}
    onMouseEnter={()=>setHover(true)}
    onMouseLeave={()=>setHover(false)} >
      Create
      </button>
      <button className='button-update' 
      style={{color:"white",
    width: "80px",
    height: "auto",
    border: "2px solid blue",
    backgroundColor: hover ? "blue" : "darkblue",
    cursor: "pointer",
    boxShadow: "0 0 10px #333",
    overflow: "hidden",
    margin:"10px",
    transition: ".3s",
    }}
    onMouseEnter={()=>setHover(true)}
    onMouseLeave={()=>setHover(false)}>Update</button>
      <button className='button-delete'style={{
        color:"white",
    width: "80px",
    height: "auto",
    border: "2px solid rgb(231, 50, 50)",
    backgroundColor: hover ? "red" : "darkred",
    cursor: "pointer",
    boxShadow: "0 0 10px #333",
    overflow: "hidden",
    margin:"10px" ,
    transition: ".3s",
   }}
   onMouseEnter={()=>setHover(true)}
    onMouseLeave={()=>setHover(false)}>
      Delete</button>
    </div>
  )
}
