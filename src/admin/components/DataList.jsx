import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';

import ADMIN_CONSTANTS from '../constants/AdminConstants';
import RouteDefaultListPage from './RouteDefaultListPage';
import DataListContainer from '../containers/DataListContainer';
import EditPageComponent from './EditPage';
import AddPageComponent from './AddPage';

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
                    columns: ADMIN_CONSTANTS[itemsType],
                    items: this.props.items
                }
            }
        
            componentDidMount() {
                this.props.getItemsAction();
            }
        
            componentWillReceiveProps(nextProps) {
                this.setState({
                    items: nextProps.items
                })
            }

            render() {
                return (
                    <Switch>
                        <Route exact path={this.props.match.path} render={RouteDefaultListPage(DataListContainer, this.state.columns, this.state.items, itemType)} />
                        <Route path={`${this.props.match.path}edit/:id`} component={EditPageComponent(itemType, this.props.getItemAction)} />
                        <Route path={`${this.props.match.path}add`} component={AddPageComponent(itemsType)} />
                    </Switch>
                )
            }
        }
    )
}

export default DataListComponent;