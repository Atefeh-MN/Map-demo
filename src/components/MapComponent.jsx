import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react'
import LocationPin from './LocationPin';


const MapComponent = () => {

  const [location,setLocation]=useState({
  address:'media1',
  lat:35.791591,
  lng:51.416347,
  })


  
  useEffect(() => {
    const newFile = JSON.parse(localStorage.getItem('New_file'));
    // if (newFile) setLocation(newFile);
    
  }, [])
  

  return ( 
    <div className='map'>
    <div style={{width:'100vw',height:'100vh'}}>
      <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyB4iGcAE2j63Lb8bw_oVZJNucm0042zbPo' }}
          defaultCenter={{lat:location.lat,lng:location.lng}}
          defaultZoom={17}
          
        >
        <LocationPin
          lat={location.lat}
          lng={location.lng}
          text={location.address}
        />
    </GoogleMapReact>
      </div>
      </div>
   );
}
 
export default MapComponent;
