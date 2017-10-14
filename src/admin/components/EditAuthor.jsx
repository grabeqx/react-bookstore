import React from 'react';
import { connect } from 'react-redux';

import { getAuthor } from '../actions/ApiActionsCreator';
import EditFormContainer from '../containers/EditFormContainer';
import EditForm from './EditForm';

class EditAuthor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Edit",
            productId: parseInt(this.props.match.params.id),
            author: {},
            disabledItems: ['id'],
            textareas: ['desc']
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            author: nextProps.author
        })
    }

    componentDidMount() {
        this.props.getAuthor(this.state.productId);
    }

    render() {
        return (
            <EditFormContainer pageTitle = {this.state.title}>
                {this.state.author.id ? 
                    <EditForm 
                        item={this.state.author} 
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
        author: state.bookStore.get('editAuthor')
    }
}


export default connect(mapStateToProps, { getAuthor })(EditAuthor);