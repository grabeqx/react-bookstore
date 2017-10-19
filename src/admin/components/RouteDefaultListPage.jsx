import React from 'react';

const RouteDefaultListPage = (Component, columns, items, itemType) => {
    return (
        () => {
            return (
                <Component items={items} columns={columns} itemType={itemType} />
            )
        }
    )
}

export default RouteDefaultListPage;