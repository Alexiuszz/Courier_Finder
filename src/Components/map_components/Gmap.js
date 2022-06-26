import React from "react";
import {
    GoogleMap,
    useLoadScript,
    Marker,
} from "@react-google-maps/api";
import mapStyles from "../../styles/mapStyles";
import Geocode from "react-geocode";

import yourLocation from "../../Icons/YourLocation.svg";

import '../../styles/mapStyles.css';
import { AddressInput } from "../form_components/FormComponents";

import * as keys from '../../data/Key';
import Loader from "../Loader";

const libraries = ["places"];
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

function Gmap({
    mapContainerStyle = {
        width: '70vw',
        height: '70vh'
    },
    mark, changeMark
}
) {

    const mapRef = React.useRef();
    Geocode.setApiKey(keys.REACT_APP_GOOGLE_MAPS_API_KEY);

    const mapClick = React.useCallback(
        async event => {
            // Get address from latitude & longitude.
            Geocode.fromLatLng(event.latLng.lat().toString(), event.latLng.lng().toString()).then(
                (response) => {
                    changeMark({
                        lat: event.latLng.lat(),
                        lng: event.latLng.lng(),
                        address: response.results[0].formatted_address
                    })
                },
                (error) => {
                    console.error(error);
                }
            );
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [],
    )

    const onMapLoad = React.useCallback((map) => {
        mapRef.current = map;
    }, []);
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: keys.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries,
    });
    const panTo = React.useCallback(({ lat, lng }) => {
        mapRef.current.panTo({ lat, lng });
        mapRef.current.setZoom(14);
    }, []);


    if (loadError) return "Error loading maps";
    if (!isLoaded) return <Loader loading={isLoaded}/>;


    return (
        <div className="mapContainer" >
            <div className="search" >
                <AddressInput
                    onAddressSelect={panTo}
                    label='Select Dispatch Location'
                    className='loginInput'
                    mark={mark}
                    changeMark={changeMark}
                />
            </div>
            <div className="locate" >
                <Locate panTo={panTo} />
            </div>


            <GoogleMap mapContainerStyle={mapContainerStyle}
                zoom={8}
                center={center}
                options={options}
                onClick={mapClick}
                onLoad={onMapLoad} >
                <Marker position={{ lat: mark.lat, lng: mark.lng }} />
            </GoogleMap>
        </div>
    )
}

export default Gmap;