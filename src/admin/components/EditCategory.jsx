import React from 'react';
import { connect } from 'react-redux';

import { getCategory } from '../actions/ApiActionsCreator';
import EditFormContainer from '../containers/EditFormContainer';
import EditForm from './EditForm';

class EditCategory extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Edit",
            productId: parseInt(this.props.match.params.id),
            category: {},
            disabledItems: ['id'],
            textareas: ['desc']
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            category: nextProps.category
        })
    }

    componentDidMount() {
        this.props.getCategory(this.state.productId);
    }

    render() {
        return (
            <EditFormContainer pageTitle = {this.state.title}>
                {this.state.category.id ? 
                    <EditForm 
                        item={this.state.category} 
                        type="Edit" 
                        disabledItems={this.state.disabledItems} 
                        textareas={this.state.textareas}
                     /> 
                : null}
            </EditFormContainer>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        category: state.bookStore.get('editCategory')
    }
}


export default connect(mapStateToProps, { getCategory })(EditCategory);