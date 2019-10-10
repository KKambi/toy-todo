class CardController {
    constructor(CardModel){
        this.CardModel = CardModel
    }

    async getAllCard(user_id){
        return await this.CardModel.findAllByUserId(user_id)
    }

    async createCard(params){
        return await this.CardModel.create(params)
    }
}

module.exports = CardController