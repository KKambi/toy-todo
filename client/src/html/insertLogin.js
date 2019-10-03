const mainContainer = document.getElementById("main-container");
mainContainer.innerHTML = `
    <h1>로그인</h1>
    <form action='http://localhost:3000/sessions/create' method='post' id='login-form'><div class='container'><label for='user'><b>아이디</b></label><input type='text' placeholder='Enter Username' name='user' required><label for='password'><b>비밀번호</b></label><input type='password' placeholder='Enter Password' name='password' required><button id='login-button'>로그인</button></div></form>`