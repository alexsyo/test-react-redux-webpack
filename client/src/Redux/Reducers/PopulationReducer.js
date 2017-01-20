const initialState = {
    people: 10,
    health: 5
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREASE':
            state = { ...state, people: state.people + 1 };
            return state;
        case 'DECREASE':
            state = { ...state, people: state.people - 1 };
            return state;
        case 'HEAL':
            state = { ...state, heal: state.heal + 1 };
            return state;
        case 'SICKEN':
            state = { ...state, heal: state.heal - 1 };
            return state;
        default:
            return state;
    }
}

export default reducer;