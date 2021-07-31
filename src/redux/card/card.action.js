import CardActionType from "./card.type";

export const toggleCardHidden = () => ({
    type: CardActionType.TOGGLE_CARD_HIDDEN
})

export const addItems = (item) => ({
    type: CardActionType.CARD_ITEM,
    payload: item
})