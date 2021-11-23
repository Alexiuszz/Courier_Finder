import React from 'react';
import { SelectInput, IconButton, Divider } from '../form_components/FormComponents';
import searchIcon from '../../Icons/Search_alt.svg'
import mapIcon from '../../Icons/mapIcon.svg'
import '../../styles/RightSideBar.css';
import '../../styles/FormComponents.css';


function RightBar() {
    const stateOptions = [
        "Abia",
        "Adamawa",
        "Akwa Ibom",
        "Anambra",
        "Bauchi",
        "Bayelsa",
        "Benue",
        "Borno",
        "Cross River",
        "Delta",
        "Ebonyi",
        "Edo",
        "Ekiti",
        "Enugu",
        "FCT - Abuja",
        "Gombe",
        "Imo",
        "Jigawa",
        "Kaduna",
        "Kano",
        "Katsina",
        "Kebbi",
        "Kogi",
        "Kwara",
        "Lagos",
        "Nasarawa",
        "Niger",
        "Ogun",
        "Ondo",
        "Osun",
        "Oyo",
        "Plateau",
        "Rivers",
        "Sokoto",
        "Taraba",
        "Yobe",
        "Zamfara"
    ];

    return (
        <div className='sideBar'>
            <h3>Find a courier</h3>
            <Divider />
            <Divider />
            <SelectInput options={stateOptions} />
            <IconButton className='iconButton1' icon={searchIcon} />

            <h3>Or</h3>
            <Divider />
            <Divider />
            <IconButton icon={mapIcon} className='mapIconBtn' text='Click here' />
            <p className='footText'>To get a more precise location
                Accept Location permission </p>
        </div>

    );
}

export default RightBar;