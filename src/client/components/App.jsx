import React from 'react';
import { Switch, Route } from 'react-router';

import Content from '../containers/Content';
import Home from '../containers/Home';
import NavBar from '../containers/NavBar';
import Footer from '../containers/Footer';

class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <NavBar />
                <Content>
                    <Switch>
                        <Route exact path="/" component={Home} />
                    </Switch>
                </Content>
                <Footer />
            </div>
        )
    }
}


export default App;