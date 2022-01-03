
import { GoogleMap, LoadScript, Marker,InfoWindow } from '@react-google-maps/api';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const MapContainer = () => {
    
  const [locations, setLocations] = useState(null)
 
  const filesData = useSelector((state) => state.fileData);
  useEffect(() => {
    setLocations(filesData);    
  }, [filesData, locations])
   
  
  const mapStyles = {
    height: "100vh",
    width: "100%",
    marginTop: '10px'
  };
  
  const defaultCenter = {
    lat: 35.791591,
    lng: 51.416347
  }
  const [select, setSelected] = useState(false);
  const onSelect = (item) => {
    setSelected(item)
   
  }
    
  
  
  return (
    <LoadScript googleMapsApiKey='AIzaSyB4iGcAE2j63Lb8bw_oVZJNucm0042zbPo'>
      <h1>Google Map</h1>
      <GoogleMap
        mapContainerStyle={mapStyles}
        zoom={12}
        center={defaultCenter}
      >
        {locations && locations.length ? locations.map(item => {
          return (
          
            <Marker key={item.lable}
              position={{ lat: item.lat, lng: item.long }}
              onClick={() => onSelect(item)}
              onMouseOver={(e)=>onSelect(item)}
            >
            </Marker>
                   
          )
        }) : <Marker position={defaultCenter} />
        }
        {select &&
          <InfoWindow
            position={{ lat: select.lat, lng: select.long }}
            clickable={true}
            onCloseClick={() => setSelected({})}
              
          >
            <p>{select.lable}</p>
          </InfoWindow>
        }
      </GoogleMap>
    </LoadScript>
  )
}
export default MapContainer;
