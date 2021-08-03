import CardActionType from '../card/card.type'
import { addItemToCard } from './card.utils'

const INITIAL_STATE = {
    hidden: true,
    cardItems: []
}

const cardReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case CardActionType.TOGGLE_CARD_HIDDEN:
            return{
                ...state,
                hidden: !state.hidden
            }
        case CardActionType.CARD_ITEM:
            return{
                ...state,
                cardItems: addItemToCard(state.cardItems, action.payload)
            }
        default:
            return state;
    }
}

export default cardReducer;