const initialState = {};

const errorReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'PIRATE_ERROR':
            throw new Error('ARRRR I\'ve got a sister');
            // break;
        case 'POSH_ERROR':
            throw new Error('I am disappointed, your behaviour is unacceptable');
            // break;
        default:
            break;
        }

    return state;
}

export default errorReducer;