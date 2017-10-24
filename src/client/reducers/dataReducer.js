import { Map, List } from 'immutable';

const dataReducer = (state = Map({
    books: List([]),
    categories: List([]),
    authors: List([])
}), action) => {

    switch(action.type) {
        default: return state;
    }

}

export default dataReducer;