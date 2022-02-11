import React from "react";
import {
    GoogleMap,
    useLoadScript,
    Marker,
} from "@react-google-maps/api";
import mapStyles from "../../styles/mapStyles";
import MapSearch from "./MapSearch";
import yourLocation from "../../Icons/YourLocation.svg";

import '../../styles/mapStyles.css';

const libraries = ["places"];
const mapContainerStyle = {
    width: '70vw',
    height: '70vh'
};
const center = {
    lat: 9.0820,
    lng: 8.6753,
}
const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
}

function Locate({ panTo }) {
    return (
        <button onClick={() => {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    panTo({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude,
                    });
                },
                () => null
            );

        }}>
            <img src={yourLocation} alt="Locate me" />
        </button>
    )
}

function Gmap() {
    const [location, setLocation] = React.useState({});
    const mapClick = React.useCallback(
        event => {
            setLocation({
                lat: event.latLng.lat(),
                lng: event.latLng.lng()
            })
        }, [],
    )

    const mapRef = React.useRef();
    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
    }, []);
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
    });
    const panTo = React.useCallback(({ lat, lng }) => {
        mapRef.current.panTo({ lat, lng });
        mapRef.current.setZoom(14);
    }, []);


    if (loadError) return "Error loading maps";
    if (!isLoaded) return "Loading Maps";


    return (
        <div className="mapContainer" >
            < div className="search" >
                <MapSearch onAddressSelect={panTo} />
            </div>
            < div className="locate" >
                <Locate panTo={panTo} />
            </div>


            <GoogleMap mapContainerStyle={mapContainerStyle}
                zoom={8}
                center={center}
                options={options}
                onClick={mapClick}
                onLoad={onMapLoad} >
                <Marker position={{ lat: location.lat, lng: location.lng }} />
            </GoogleMap>
        </div>
    )
}

export default Gmap;