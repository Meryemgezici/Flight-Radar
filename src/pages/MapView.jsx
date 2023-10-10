import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { useSelector } from 'react-redux';
import flightSlice from '../redux/slices/flightSlice';

const MapView = ({openModel}) => {

  const state = useSelector((store) => store);

  return (
    <div>
      <MapContainer center={[39.9334, 32.8597]} zoom={7} scrollWheelZoom={true}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {state.flights.map((flight) => <Marker key={flight.id} position={[flight.lat, flight.lng]}>
          <Popup>
            <div className='popup'>
              <p>kod:{flight.code}</p>
              <button onClick={()=>openModel(flight.id)}>Detay</button>
            </div>
          </Popup>
        </Marker>)}

      </MapContainer>
    </div>

  )
}

export default MapView
