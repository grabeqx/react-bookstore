import React from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router';

import EditFormContainer from '../containers/EditFormContainer';
import EditForm from './EditForm';

const EditPageComponent = (dataType, getDataMethod) => {

    const mapStateToProps = (state) => {
        return {
            item: state.bookStore.get(dataType)
        }
    }

    return (
        connect(mapStateToProps, null)(
            class EditPage extends React.Component {
                constructor(props) {
                    super(props);
                    this.state = {
                        title: 'Edit',
                        id: parseInt(this.props.match.params.id),
                        item: {},
                        disabledItems: ['id'],
                        textareas: ['desc']
                    }
                }
            
                componentWillReceiveProps(nextProps) {
                    this.setState({
                        item: nextProps.item
                    })
                }
            
                componentDidMount() {
                    getDataMethod(this.state.id);
                }
            
                render() {
                    return (
                        <EditFormContainer pageTitle = {this.state.title}>
                            {this.state.item.id ? 
                                <EditForm 
                                    item={this.state.item} 
                                    type="Edit" 
                                    disabledItems={this.state.disabledItems} 
                                    textareas={this.state.textareas}
                                /> 
                            : null}
                        </EditFormContainer>
                    )
                }
            }
        )
    )
    
}

export default EditPageComponent;