import React from 'react';
import RouterConstants from '../constants/RouterConstants.js';
import { Link } from 'react-router-dom';

class Slidenav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            route: Object.entries(RouterConstants)
        }
    }
    
    render() {
        return (
            <ul>
                {this.state.route.map((link, index) => (
                    <li key={index}>
                        <Link to={link[1]}>{link[0]}</Link>
                    </li>
                ))}
            </ul>
        )
    }
}

export default Slidenav