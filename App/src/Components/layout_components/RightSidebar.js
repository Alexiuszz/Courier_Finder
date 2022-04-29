import React from 'react';
import { SelectInput, IconButton, Divider } from '../form_components/FormComponents';
import searchIcon from '../../Icons/Search_alt.svg'
import mapIcon from '../../Icons/mapIcon.svg'
import '../../styles/RightSideBar.css';
import '../../styles/FormComponents.css';
// import { states } from '../../data/states';


function RightBar() {
    // const stateOptions = states();

    return (
        <div className='sideBar'>
            <h3>Find a courier</h3>
            <Divider />
            <Divider />
            {/* <SelectInput options={stateOptions} label='State'/> */}
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


