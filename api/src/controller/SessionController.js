const util_encrpytion = require('../javascripts/util_encryption')

class SessionController {
    constructor(User){
        this.User = User
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