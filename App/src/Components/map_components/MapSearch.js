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

function MapSearch({ panTo }) {
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


    return (
        <Combobox
            onSelect={async address => {
                try {
                    const results = await getGeocode({ address });
                    const { lat, lng } = await getLatLng(results[0]);
                    panTo({ lat, lng });
                    setValue(address, false);
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
                }}
                disabled={!ready}
                placeHolder="Enter an Address"
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
