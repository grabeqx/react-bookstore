import React from 'react';
import { Link } from 'react-router-dom';

import ADMIN_CONSTANTS from '../constants/AdminConstants';

const SidebarComponent = (props) => {

    return (
        <div className="sidebar">
            <h3 className="sidebarTitle">{ADMIN_CONSTANTS.SIDE_TITLE}</h3>
            <ul className="sidebarList">
                {props.links.map((link, index) => (
                    <li key={index}>
                        <Link to={link[1]}>{link[0]}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SidebarComponent;