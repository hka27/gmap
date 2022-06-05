import { useMemo } from "react";
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";
 
export const Map = ()=>{
    const center = useMemo(() => ({ lat: 44, lng: -80 }), []);

    //1. pointer on current location === gmap api
    //2. markers on desired locations === coordinates of restaurants
    //3. current location -> api call to backend ->  list of restaurants with coordinates
    //4. backend -> function to sort the list and send sorted array of restaurants
    //5. 4 -> 2

    // whatever used in 1 -> current coordnate

    // use trigger button and open the gmap to user
    // when fetching list , remmber location as history.txt

    return (
        <GoogleMap zoom={10} center={center} mapContainerClassName="map-container">
        <Marker position={center} />
        <Marker position={{ lat: -37.813179, lng: 144.950259 }} />
        </GoogleMap>
    );
}