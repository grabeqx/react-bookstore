import React from 'react';

import SearchInput from '../components/SearchInput';
import List from './List';
import AddButton from './AddButton';

const DataListContainer = (props) => {
    return (
        <div className="row">
            <div className="col-sm-12">
                <SearchInput />
            </div>
            <div className="col-sm-12">
                <div className="d-flex justify-content-end mb-3">
                    <AddButton itemType={props.itemType}/>
                </div>
                <List {...props} />
            </div>
        </div>
    )
}
export default DataListContainer;