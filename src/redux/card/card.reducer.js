import CardActionType from '../card/card.type'

const INITIAL_STATE = {
    hidden: true
}

const cardReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case CardActionType.TOGGLE_CARD_HIDDEN:
            return{
                ...state,
                hidden: !state.hidden
            }
        default:
            return state;
    }
}

export default cardReducer;