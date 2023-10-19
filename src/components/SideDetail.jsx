import { useEffect, useState } from "react"
import axios from "axios";
import { detailOptions } from "../utils/constants";
import { useDispatch } from "react-redux";
import { setRoute } from "../redux/slices/flightSlice";

const SideDetail = ({setShowDetails,detailId}) => {
    
    const [details,setDetails]=useState(null);
    const dispatch=useDispatch();
  
 
    useEffect(()=>{
        setDetails(null);
        axios.get(`https://flight-radar1.p.rapidapi.com/flights/detail?flight=${detailId}`,detailOptions)
        .then((res)=>{
          setDetails(res.data);
          dispatch(setRoute(res.data.trail))
        });
        console.log(details);
    },[detailId]);

  return (
    <div className='detail-outer'>
      <div className='detail-inner'>
        <p className='close'>
            <span onClick={()=>setShowDetails(false)}>X</span>
        </p>
        {!details ? (
          <p>Yükleniyor....</p>
        ) : (
          <>
            <h2>{details.aircraft.model?.text}</h2>
            <h2>{details.aircraft.model.code}</h2>
            <p>Kuyruk No: {details.aircraft.registration}</p>
            <img className="detail-img" src={details.aircraft.images?.large[0].src} />
            <p> Şirket: {details.airline.name}</p>
            <p>
              <span>Kalkış: </span>
              <a target="_blank" href={details.airport.origin?.website}>
                {details.airport.origin.name}
              </a>
            </p>
            <p>
              <span>Hedef: </span>
              <a
                target="_blank"
                href={details.airport.destination?.website}
              >
                {details.airport.destination.name}
              </a>
            </p>

            <p>
              <span>Durum: </span>
              <span
                className="status"
                style={{ background: details.status.icon }}
              >
                {details.status?.text}
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  )
}

export default SideDetail
