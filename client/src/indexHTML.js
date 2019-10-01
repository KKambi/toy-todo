
const indexHTML = {
    "login": `
        <form action="./sessions/create" method="post">
            <div class="container">
                <label for="user"><b>아이디</b></label>
                <input type="text" placeholder="Enter Username" name="user" required>
    
                <label for="password"><b>비밀번호</b></label>
                <input type="password" placeholder="Enter Password" name="password" required>
    
                <button type="submit">로그인</button>
            </div>
        </form>
    `
}

module.exports = indexHTML;