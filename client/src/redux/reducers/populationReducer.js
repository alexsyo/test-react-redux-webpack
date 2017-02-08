const initialState = {
    people: 10,
    health: 5
};

const populationReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INCREASE':
            state = { ...state, people: state.people + 1 };
            break;
        case 'DECREASE':
            state = { ...state, people: state.people - 1 };
            break;
        case 'HEAL':
            state = { ...state, heal: state.heal + 1 };
            break;
        case 'SICKEN':
            state = { ...state, heal: state.heal - 1 };
            return state;
        default:
            break;
    }

    return state;
}

export default populationReducer;