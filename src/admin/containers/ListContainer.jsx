import React from 'react';
import { Link } from 'react-router-dom';

import SearchInput from '../components/SearchInput';
import RouterConstants from '../constants/RouterConstants';

const ListContainer = ({items = [], columns = [], handleDelete}) => {
    return (
        <div className="mainContent">
            <table className="table">
                <thead>
                    <tr>
                        {columns.map((column,index) => (
                            <th key={index}>{column}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {items.map((item) => {
                        let id = item.id;
                        return (
                        <tr key={item.id}>
                            {columns.map((column,index) => (
                                <td key={index}>
                                {
                                    index == (columns.length - 2) ? <Link to={`edit/${item.id}`} className="button bg"><i className="fa fa-pencil" aria-hidden="true"></i>{" "}Edit</Link> 
                                    : index == (columns.length -1) ? <a href="#" className="button danger" onClick={(e, item) => handleDelete(e, id)}><i className="fa fa-trash" aria-hidden="true"></i></a>
                                    : item[column] 
                                }
                                </td>
                            ))}
                        </tr>)}
                    )}
                </tbody>
            </table>
        </div>
    )
}
export default ListContainer;