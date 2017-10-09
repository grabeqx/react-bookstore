import React from 'react';

import SearchInput from '../components/SearchInput';
import List from './List';


const ProductListContainer = (props) => {
    console.log(props);
    return (
        <div className="row">
            <div className="col-sm-12">
                <SearchInput />
            </div>
            <div className="col-sm-12">
                <List {...props} />
            </div>
        </div>
    )
}
export default ProductListContainer;