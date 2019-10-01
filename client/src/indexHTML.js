const indexHTML = {
    API_HOST: `http://localhost:3000`,
    login(){ 
        return `<form action="${this.API_HOST}/sessions/create" method="post">
                    <div class="container">
                        <label for="user"><b>아이디</b></label>
                        <input type="text" placeholder="Enter Username" name="user" required>
            
                        <label for="password"><b>비밀번호</b></label>
                        <input type="password" placeholder="Enter Password" name="password" required>
            
                        <button onclick="submitInfo();">로그인</button>
                    </div>
                </form>`
    }
}

module.exports = indexHTML;