import React from 'react';
import { Link } from 'react-router-dom';

import SearchInput from '../components/SearchInput';
import RouterConstants from '../constants/RouterConstants';

const List = ({items = [], columns = []}) => {
    return (
        <div className="tableContainer">
            <table className="table">
                <thead>
                    <tr>
                        {columns.map((column,index) => (
                            <th key={index}>{column}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => (
                        <tr key={item.id}>
                            {columns.map((column,index) => (
                                <td key={index}>
                                {
                                    index == (columns.length - 2) ? <Link to={`/admin/products/edit/${item.id}`} className="button bg"><i className="fa fa-pencil" aria-hidden="true"></i>{" "}Edit</Link> 
                                    : index == (columns.length -1) ? <Link to={`/admin/products/edit/${item.id}`} className="button danger"><i className="fa fa-trash" aria-hidden="true"></i></Link>
                                    : item[column] 
                                }
                                </td>
                            ))}
                        </tr>)
                    )}
                </tbody>
            </table>
        </div>
    )
}
export default List;