import { createSelector } from "reselect";

const selectCard = state => state.card;

export const selectCardItems = createSelector(
    [selectCard],
    card => card.cardItems
)

export const selectCardItemCount = createSelector(
    [selectCardItems],
    cardItems => cardItems.reduce(
        (accumulatedQuantity, cardItem) => accumulatedQuantity + cardItem.quantity, 0
    )
)