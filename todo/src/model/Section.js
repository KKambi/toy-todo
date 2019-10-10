const IModelWithId = require('./interface/IModelWithId')
const util_dbPool = require('../javascripts/util/util_dbPool')

class Section extends IModelWithId {
    async findAllByUserId(user_id){
        try {
            const findAllByUserIdQuery = `
                SELECT id, ${this.ATTRIBUTE_LIST}
                FROM ${this.TABLE_NAME} 
                WHERE toDo_id 
                IN (SELECT id FROM toDo WHERE user_id = ?);`

            const connection = await util_dbPool.pool.getConnection(async conn => conn);
            try {
                //user_id를 통해 그 유저의 todo_id를 찾는 작업
                const findAllByUserValue = [`${user_id}`]

                const [ section_rows ] = await connection.execute(findAllByUserIdQuery, findAllByUserValue)
                connection.release();
                return section_rows;
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

    async create(params){
        let connection;
        try {
            try {
                if (Object.keys(params).length !== this.ATTRIBUTE_NUMBERS) throw "Params Error"
            } catch (err){
                console.log(err)
                return false;
            }
            let insertQuery = `INSERT INTO ${this.TABLE_NAME} (${this.ATTRIBUTE_LIST}) VALUES (`
            for (let i=0; i<this.ATTRIBUTE_NUMBERS-1; i++){
                insertQuery += '?,'
            }
            insertQuery += '?)'
            
            let insertValue = []
            for (const key in params){
                insertValue.push(`${params[key]}`)
            }

            let todoIdFindQuery = `SELECT * FROM toDo WHERE user_id = ?;`
            let todoIdFindValue = [`${params.user_id}`]

            connection = await util_dbPool.pool.getConnection(async conn => conn);
            try {
                //user_id를 통해 그 유저의 todo_id로 교체하는 작업
                const [ rows ] = await connection.execute(todoIdFindQuery, todoIdFindValue)
                const toDo_id = rows[0].id;
                insertValue[0] = toDo_id

                //section insert하는 작업
                const insertResult = await connection.execute(insertQuery, insertValue)
                connection.release();
                return insertResult[0].insertId;
            } catch(err){
                console.log(`Query Error ~ ${err}`);
                connection.release();
                return false;
            }
        } catch(err){
            console.log(`DB Connection Error ~ ${err.stack}`);
            connection.release();
            return false;
        }
    }
}

module.exports = Section;