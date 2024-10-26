
const card = require('../model/card');



async function createCard(cardData) {
    try {
        const newCard = await card.save(cardData);
        return newCard;
    }
    catch (error) {
        throw error("Unable to create card", err);
    }
}

async function deleteCard(card_id) {
    try {
        const card_to_remove = await card.findByIdAndDelete({ '_id': card_id });
        return card_to_remove;
    }
    catch (error) {
        throw error("Unable to delete card", err);
    }
}


async function updateCard(card_id, card_to_update) {
    try {

        const cardupdate = await card.findOneAndUpdate({ $and: [{ '_id': card_id }, { $set: card_to_update }] });
        return cardupdate;
    }
    catch (error) {
        throw error("Unable to update card details", err);
    }
}

async function viewCardsByDueDate() {
    try {

        const cardListByDueDate = await card.find({}).sort({ due_date: 1 });
        return cardListByDueDate;
    }
    catch (error) {
        throw error("Unable to fetch cards by due date", err);
    }
}


async function viewCards() {
    try {

        const cardLists = await card.find({})
        return cardLists;
    }
    catch (err) {
        throw error("Unable to fetch cards", err);
    }
}


module.exports = {
    createCard,
    deleteCard,
    updateCard,
    viewCardsByDueDate,
    viewCards


}