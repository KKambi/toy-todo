
const adminCheck = async (req, res, next) => {
    const sessionId = req.cookies.session_id
    if (!sessionId) return;
    
}

module.exports = adminCheck;