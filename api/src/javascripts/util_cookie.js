const util_cookie = {
    MIN_30: 1800000,
    COOKIE_OPTIONS: {
        maxAge: this.MIN_30,
        httpOnly: true
    }
}

module.exports = util_cookie
