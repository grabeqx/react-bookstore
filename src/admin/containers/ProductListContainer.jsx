import React from 'react';

import SearchInput from '../components/SearchInput';

const ProductsList = (props) => {
    return (
        <div className="row">
            <div className="col-sm-12">
                <SearchInput />
            </div>
            <div className="col-sm-12">
                {props.children}
            </div>
        </div>
    )
}
export default ProductsList;