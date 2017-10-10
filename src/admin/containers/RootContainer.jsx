import React from 'react';
import { Route, Switch } from 'react-router'

import Navbar from './Navbar';
import Sidebar from '../components/Sidebar';
import Root from '../components/Root';
import MessagesInformator from '../components/MessagesInformator';

const RootContainer = (props) => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12 p-0 mb-4">
                    <Navbar />
                </div>
            </div>
            <div className="row">
                <aside className="col-sm-2">
                    <Sidebar />
                </aside>
                <main className="col-sm-10 main">
                    <Root {...props} />
                </main>
            </div>
            <MessagesInformator />
        </div>
    )
}

export default RootContainer;