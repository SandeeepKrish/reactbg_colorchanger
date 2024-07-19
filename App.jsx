import { useState } from "react"
function App() {

  const[colors,setColors] = useState("olive")
  console.log("colors",colors)
  return (
    <>
    <h1 className=" fixed flex flex-wrap justify-center top-12 inset-x-0 px-2 font-fontWeight: '20',"
    style={{backgroundColor : "white"}}> react with tailwind css</h1>
      <div className="w-full h-screen duration-200"
        style={{backgroundColor : colors}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2" >

        <div className=" flex flex-wrap justify-center gap-4 shadow-lg bg-white px-3 py-2 rounded-3xl">

          <button onClick= {()=> setColors("red")}
           className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "red" }}>red</button>
          <button onClick= {()=> setColors("blue")}
           className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "blue" }}>blue</button>
          <button onClick= {()=> setColors("yellow")}
           className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "yellow" }}>yellow</button>
          <button onClick= {()=> setColors("black")}
           className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "black" }}>black</button>
          <button onClick= {()=> setColors("white")}
           className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style={{ backgroundColor: "grey" }}>white</button>

        </div>

      </div>
      </div>
    </>
  )
}

export default App


