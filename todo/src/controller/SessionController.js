const util_encrpytion = require('../javascripts/uitl/util_encryption')

class SessionController {
    constructor(User){
        this.User = User
    }

    async findUser(user){
        return await this.User.find('user', user);
    }

    encryptPassword(password){
        const [salt, encryptedPassword] = util_encrpytion.encrypt(password)
        return [salt, encryptedPassword]
    }

    comparePassword(inputPassword, storedSalt, storedPassword){
        return util_encrpytion.isSame(inputPassword, storedSalt, storedPassword)
    }
}

module.exports = SessionController