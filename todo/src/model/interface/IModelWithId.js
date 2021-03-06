/*
Model Schema
User -> user, 4, user, name, password, is_admin
ToDo -> toDo, 2, user_id, is_open
Section -> section, 3, toDo_id, name, sort
Card -> card, 6, section_id, writer, content, sort, fileURL, imageURL
Permission -> permission, 2, user_id, grant_id
*/

const util_dbPool = require('../../javascripts/util/util_dbPool')

class IModelWithId {
    constructor(TABLE_NAME, ATTRIBUTE_NUMBERS, ATTRIBUTE_LIST){
        this.TABLE_NAME = TABLE_NAME
        this.ATTRIBUTE_NUMBERS = Number(ATTRIBUTE_NUMBERS)
        this.ATTRIBUTE_LIST = ATTRIBUTE_LIST
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
            connection = await util_dbPool.pool.getConnection(async conn => conn);
            try {
                const result = await connection.execute(insertQuery, insertValue)
                connection.release();
                return result[0].insertId;
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

    async find(attribute, identifier){
        try {
            const findQuery = `SELECT id, ${this.ATTRIBUTE_LIST} FROM ${this.TABLE_NAME} WHERE ${attribute} = ?;`
            const findValue = [`${identifier}`]
            const connection = await util_dbPool.pool.getConnection(async conn => conn);
            try {
                const [rows] = await connection.execute(findQuery, findValue);
                connection.release();
                if (rows.length) return rows[0];
                return false;
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

    async findAll(){
        try {
            const findAllQuery = `SELECT id, ${this.ATTRIBUTE_LIST} FROM ${this.TABLE_NAME};`
            const connection = await util_dbPool.pool.getConnection(async conn => conn);
            try {
                const [rows] = await connection.query(findAllQuery);
                connection.release();
                return rows;
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

    async update(target, value, attribute, identifier){
        try {
            const updateQuery = `UPDATE ${this.TABLE_NAME} SET ${target} = ? WHERE ${attribute} = ?;`
            const updateValue = [`${value}`, `${identifier}`]
            const connection = await util_dbPool.pool.getConnection(async conn => conn);
            try {
                await connection.execute(updateQuery, updateValue);
                connection.release();
                return true;
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

    async delete(attribute, identifier){
        try {
            const deleteQuery = `DELETE FROM ${this.TABLE_NAME} WHERE ${attribute} = ?;`
            const deleteValue = [`${identifier}`]
            console.log(deleteQuery)
            console.log(deleteValue)
            const connection = await util_dbPool.pool.getConnection(async conn => conn);
            try {
                await connection.execute(deleteQuery, deleteValue);
                connection.release();
                return true;
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
};

module.exports = IModelWithId

