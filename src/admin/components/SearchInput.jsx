import React from 'react';

class SearchInput extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <input type="text" placeholder="Search" className="search"/>
        )
    }
}

export default SearchInput;