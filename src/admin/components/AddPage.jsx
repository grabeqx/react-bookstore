import React from 'react';
import { connect } from 'react-redux';

import EditFormContainer from '../containers/EditFormContainer';
import EditForm from './EditForm';
import DataStructures from '../constants/DataStructures';

const AddPageComponent = (itemsType) => {

    const mapStateToProps = function(state) {
        return {
            lastID: state.bookStore.get(itemsType)[state.bookStore.get(itemsType).length - 1].id
        }
    }    

    return connect(mapStateToProps, null)(
        class AddPage extends React.Component {
            constructor(props) {
                super(props);
                this.state = {
                    title: 'Add',
                    id: this.props.lastID + 1,
                    item: DataStructures[this.props.location.state],
                    disabledItems: ['id'],
                    textareas: ['desc']
                }
            }
        
            componentDidMount() {
                this.setState({
                    item: Object.assign({}, this.state.item, {
                        id: this.state.id
                    })
                })
            }
        
            render() {
                return (
                    <EditFormContainer pageTitle = {this.state.title}>
                        {this.state.item.id ? 
                            <EditForm 
                                item={this.state.item} 
                                type="Add" 
                                method="add"
                                dataType={this.props.location.state}
                                disabledItems={this.state.disabledItems} 
                                textareas={this.state.textareas}
                            /> 
                        : null}
                    </EditFormContainer>
                )
            }
        }
    )
}

export default AddPageComponent;