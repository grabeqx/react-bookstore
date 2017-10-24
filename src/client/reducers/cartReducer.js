import { Map, List } from 'immutable';

const cartReducer = (state = Map({
    empty: ture,
    itemsCount: 0,
    items: List([])
}), action) => {

    switch(action.type) {
        default: return state;
    }

}

export default cartReducer;