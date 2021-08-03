import CardActionType from "./card.type";

export const toggleCardHidden = () => ({
    type: CardActionType.TOGGLE_CARD_HIDDEN
})

export const addItems = (item) => ({
    type: CardActionType.ADD_ITEM,
    payload: item
})

export const removeItem = (item) => ({
    type: CardActionType.REMOVE_ITEM,
    payload: item
})

export const clearItemsFromCard = (item) => ({
    type: CardActionType.CLEAR_ITEM_FROM_CARD,
    payload: item
})