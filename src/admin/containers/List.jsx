import React from 'react';
import { Link } from 'react-router-dom';

import SearchInput from '../components/SearchInput';
import RouterConstants from '../constants/RouterConstants';

const List = ({items, columns}) => {
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
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td></td>
                            <td>{item.quantity}</td>
                            <td>
                                <Link to={`/admin/products/edit/${item.id}`} className="button">Edit</Link>
                            </td>
                        </tr>
                    )
                    )}
                </tbody>
            </table>
        </div>
    )
}
export default List;