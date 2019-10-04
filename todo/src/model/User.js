const ModelWithId = require('./ModelWithId')

class User extends ModelWithId {

}

module.exports = User;

// (async() => { console.log(await User.create({
//     user: "adminw2",
//     password: "123123",
//     name: "김지현",
//     is_admin: "1"
// }))})();
// (async() => {console.log(await User.findAll())})();
// (async() => {console.log(await User.find('admin'))})();