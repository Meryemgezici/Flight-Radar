import { useEffect, useState } from "react"
import Header from "./components/Header"
import MapView from "./pages/MapView";
import ListView from "./pages/ListView";
import { useDispatch, useSelector } from "react-redux";
import { getFlight } from "./redux/actions/flightAction";
import SideDetail from "./components/SideDetail";

function App() {
  const [showMap,setShowMap] =useState(true);
  const dispatch=useDispatch();
  const [showDetails,setShowDetails] = useState(false);
  const [detailId,setDetailId] = useState();

  const openModel=(id)=>{
    setDetailId(id);
    setShowDetails(true);
  }

  useEffect(()=>{
    dispatch(getFlight());
  },[]);

  return (
    <>
     <Header/>

      <div className="view-buttons">
        <button className={showMap ? "active" :""}  onClick={()=>setShowMap(true)}>Harita Görünümü</button>
        <button className={!showMap ?"active":""} onClick={()=>setShowMap(false)}>Liste Görünümü</button>
      </div>

      {showMap ? <MapView openModel={openModel}/> : <ListView/>}
      {/* Detail Side */}
      {showDetails && <SideDetail setShowDetails={setShowDetails} detailId={detailId}/>}
    </>
  )
}

export default App
