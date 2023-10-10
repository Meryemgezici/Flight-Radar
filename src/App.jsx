import { useState } from "react"
import Header from "./components/Header"
import MapView from "./pages/MapView";
import ListView from "./pages/ListView";

function App() {
  const [showMap,setShowMap] =useState(true);
  console.log(showMap);
  return (
    <>
     <Header/>

      <div className="view-buttons">
        <button className={showMap ? "active" :""}  onClick={()=>setShowMap(true)}>Harita Görünümü</button>
        <button className={!showMap ?"active":""} onClick={()=>setShowMap(false)}>Liste Görünümü</button>
      </div>

      {showMap ? <MapView/> : <ListView/>}
    </>
  )
}

export default App
