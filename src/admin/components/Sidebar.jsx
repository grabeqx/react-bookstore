import React from 'react';
import { Link } from 'react-router-dom';

import RouterConstants from '../constants/RouterConstants.js';
import SidebarComponent from '../containers/SidebarComponent';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            links: Object.entries(RouterConstants)
        }
    }
    
    render() {
        return (
            <SidebarComponent links={this.state.links}/>
        )
    }
}

export default Sidebar