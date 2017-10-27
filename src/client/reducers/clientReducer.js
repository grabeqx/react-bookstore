import { Map, List } from 'immutable';

const clientReducer = (state = Map({
    messages: List([]),
    clientData: Map({})
}), action) => {

    switch(action.type) {
        default: return state;
    }

}

export default clientReducer;