
class LoginController{
    constructor(mainContainer){
        this.mainContainer = mainContainer
        this.url = "http://localhost:3000/sessions/create" //api login url
    }

    init(){
        //form button에 대한 이벤트 핸들러 설정
        this.mainContainer.addEventListener("click", async (event) => {
            if (!event.target || event.target.id !== "login-button") return;
            event.preventDefault();   
            this.login(this.url) //FIXME: 성공, 실패 리턴값 받아서 처리해야함
        })
    }

    async login(url){
        const formData = new FormData(document.getElementById("login-form"))
        await fetch(url, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }, 
            method: "POST",
            body: JSON.stringify({
                "user": formData.get("user"),
                "password": formData.get("password")
            })
        });
    }
}

module.exports = LoginController