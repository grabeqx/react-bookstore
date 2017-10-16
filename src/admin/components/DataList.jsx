import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';

import ADMIN_CONSTANTS from '../constants/AdminConstants';
import RouteDefaultListPage from './RouteDefaultListPage';
import DataListContainer from '../containers/DataListContainer';
import EditPageComponent from './EditPage';

const DataListComponent = function(itemType, itemsType, getItemAction, getItemsAction, columns) {

    const getStateToProps = (state) => {
        return {
            items: state.bookStore.get(itemsType)
        }
    }

    return connect(getStateToProps, {getItemAction, getItemsAction})(
        class DataList extends React.Component {
            constructor(props) {
                super(props);
                this.state = {
                    columns: ADMIN_CONSTANTS[itemsType]
                }
            }
        
            componentDidMount() {
                this.props.getItemsAction();
            }
        
            render() {
                return (
                    <Switch>
                        <Route exact path={this.props.match.path} render={RouteDefaultListPage(DataListContainer, this.state.columns, this.props.items)} />
                        <Route path={`${this.props.match.path}edit/:id`} component={EditPageComponent(itemType, this.props.getItemAction)} />
                    </Switch>
                )
            }
        }
    )
}

export default DataListComponent;