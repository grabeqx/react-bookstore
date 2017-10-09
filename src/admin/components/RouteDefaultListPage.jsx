import React from 'react';

const RouteDefaultListPage = (Component, columns, props) => {
    return (
        () => {
            return (
                <Component items={props.books} columns={columns} />
            )
        }
    )
}

export default RouteDefaultListPage;