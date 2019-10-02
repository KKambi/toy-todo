
class LoginController{
    constructor(mainContainer){
        this.mainContainer = mainContainer
        this.url = "http://localhost:3000/sessions/create" //api login url
    }

    init(){
        //form button에 대한 이벤트 핸들러 설정
        this.mainContainer.addEventListener("click", event => {
            if (!event.target || event.target.id !== "login-button") return;
            event.preventDefault();   
            this.login(this.url)
        })
    }

    async login(url){
        const response = await fetch(url, { 
            method: "POST",
            body: {
                user: "admin",
                password: "123123"
            }
        });
        const data = await response.json();
        return data;

    }
}

module.exports = LoginController