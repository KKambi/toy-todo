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

    async deleteCard(id){
        return await this.CardModel.delete('id', id)
    }
}

module.exports = CardController