import React from "react";
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
} from "use-places-autocomplete";
import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
} from "@reach/combobox";

import "@reach/combobox/styles.css";


function MapSearch({ onAddressSelect, handleChange, mark = null, changeMark=f=>f }) {
    const {
        ready,
        value,
        suggestions: { status, data },
        setValue,
        clearSuggestions
    } = usePlacesAutocomplete({
        requestOptions: {
            location: { lat: () => 9.0820, lng: () => 8.6753 },
            radius: 200 * 1000,
        }
    });

    const updateSearch = () => {
        setValue(mark.address, false);
        handleChange(mark.address);

    }

    React.useEffect(() => {
        if (mark !== null && mark.address !== null) {
            updateSearch();
        }// eslint-disable-next-line
    }, [mark])

    return (
        <Combobox
            onSelect={async address => {
                try {
                    const results = await getGeocode({ address });
                    const { lat, lng } = await getLatLng(results[0]);
                    onAddressSelect({ lat, lng, address });
                    setValue(address, false);
                    changeMark({
                        lat: lat,
                        lng: lng,
                        address: address
                    });
                    clearSuggestions();

                } catch (error) {
                    console.log(error)
                }
            }}
        >
            <ComboboxInput
                value={value}
                onChange={(e) => {
                    setValue(e.target.value);
                    handleChange(e.target.value);
                }}
                disabled={!ready}
            />
            <ComboboxPopover>
                <ComboboxList>
                    {status === "OK" && data.map(({ id, description }) => (
                        <ComboboxOption key={id} value={description} />
                    ))}
                </ComboboxList>
            </ComboboxPopover>
        </Combobox>
    )
}

export default MapSearch
