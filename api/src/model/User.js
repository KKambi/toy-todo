const { pool } = require('../javascripts/dbPool.js')

const User = {
    PARAMS_NUMBER: 4,

    async create(params){
        let connection;
        try {
            try {
                if (Object.keys(params).length !== this.PARAMS_NUMBER) throw "Params Error"
            } catch (err){
                console.log(err)
                return false;
            }
            const insertQuery = 'INSERT INTO user (user, password, name, is_admin) VALUES (?, ?, ?, ?);'
            const insertValue = [`${params.user}`, `${params.password}`, `${params.name}`, `${params.is_admin}`]
            connection = await pool.getConnection(async conn => conn);
            try {
                await connection.execute(insertQuery, insertValue);
                connection.release();
                return true;
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
    },

    async find(user){
        try {
            const findQuery = 'SELECT id, user, password, is_admin FROM user WHERE user = ?;'
            const findValue = [`${user}`]
            const connection = await pool.getConnection(async conn => conn);
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
    },

    async findAll(){
        try {
            const findAllQuery = 'SELECT id, user, password, is_admin FROM user;'
            const connection = await pool.getConnection(async conn => conn);
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
    },

    async update(user, attribute, value){
        try {
            const updateQuery = `UPDATE user SET ${attribute} = ? WHERE user = ?;`
            const updateValue = [`${value}`, `${user}`]
            const connection = await pool.getConnection(async conn => conn);
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
    },

    async delete(user){
        try {
            const deleteQuery = `DELETE user WHERE user = ?;`
            const deleteValue = [`${user}`]
            const connection = await pool.getConnection(async conn => conn);
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

module.exports = {
    User
};

// (async() => { console.log(await User.create({
//     user: "adminw2",
//     password: "123123",
//     name: "김지현",
//     is_admin: "1"
// }))})();
// (async() => {console.log(await User.findAll())})();
// (async() => {console.log(await User.find('admin'))})();