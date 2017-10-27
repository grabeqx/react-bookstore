import { Map, List } from 'immutable';

const cartReducer = (state = Map({
    empty: true,
    itemsCount: 0,
    items: List([])
}), action) => {

    switch(action.type) {
        default: return state;
    }

}

export default cartReducer;