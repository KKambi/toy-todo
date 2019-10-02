const { pool } = require('../javascripts/dbPool.js')

const User = {
    PARAMS_NUMBER: 9,

    async create(params){
        let connection;
        try {
            try {
                if (Object.keys(params).length !== this.PARAMS_NUMBER) throw "Params Error"
            } catch (err){
                console.log(err)
                return false;
            }
            const insertQuery = `INSERT INTO user (user_id, password, name, birth, gender, email, phone, interest, admin) VALUES (
                '${params.user_id}',
                '${params.password}',
                '${params.name}',
                '${params.birth}',
                '${params.gender}',
                '${params.email}',
                '${params.phone}',
                '${params.interest}',
                '${params.admin}'
            );`
            connection = await pool.getConnection(async conn => conn);
            try {
                await connection.query(insertQuery);
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

    async find(userId){
        try {
            const findQuery = `SELECT * FROM user WHERE user_id='${userId}';`
            const connection = await pool.getConnection(async conn => conn);
            try {
                const [rows] = await connection.query(findQuery);
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
            const findAllQuery = `SELECT * FROM user;`
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

    async update(userId, attribute, value){
        try {
            const updateQuery = `UPDATE user SET ${attribute} = '${value}' WHERE user_id='${userId}'`
            const connection = await pool.getConnection(async conn => conn);
            try {
                await connection.query(updateQuery);
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

    async delete(userId){
        try {
            const deleteQuery = `DELETE user WHERE user_id='${userId}'`
            const connection = await pool.getConnection(async conn => conn);
            try {
                await connection.query(deleteQuery);
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
//     user: "testuser12",
//     password: "hi",
//     name: "te",
//     birth: "94/03/22",
//     gender: "m",
//     email: "bok123@mg.com",
//     phone: "010-2342-2343",
//     interest: "ewr/werw/qwe",
//     admin: "1"
// }))})();
(async() => {console.log(await User.findAll())})();