import React from 'react';

const RouteDefaultListPage = (Component, columns, items) => {
    return (
        () => {
            return (
                <Component items={items} columns={columns} />
            )
        }
    )
}

export default RouteDefaultListPage;