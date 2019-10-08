class CardController {
    constructor(CardModel){
        this.CardModel = CardModel
    }

    async createCard(params){
        return await this.CardModel.create(params)
    }
}

module.exports = CardController