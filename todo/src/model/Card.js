const IModelWithId = require('./interface/IModelWithId')
const util_dbPool = require('../javascripts/util/util_dbPool')

class Card extends IModelWithId {
    async findAllByUserId(user_id){
        try {
            const findAllByUserIdQuery = `
                SELECT id, ${this.ATTRIBUTE_LIST} FROM ${this.TABLE_NAME} WHERE section_id IN 
                    (SELECT id FROM section WHERE toDo_id IN 
                        (SELECT id FROM toDo WHERE user_id = ?));`
            const findAllByUserValue = [`${user_id}`]

            const connection = await util_dbPool.pool.getConnection(async conn => conn);
            try {
                const [ card_rows ] = await connection.execute(findAllByUserIdQuery, findAllByUserValue)
                connection.release();
                return card_rows;
            } catch(err){
                console.log(`Query Error ~ ${err}`);
                connection.release();
                return false;
            }
        } catch(err){
            console.log(`DB Connection Error ~ ${err}`);
            return false;
        }
    }
}

module.exports = Card;