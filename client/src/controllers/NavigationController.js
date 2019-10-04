//출처: https://poiemaweb.com/js-spa
class NavigationController {
    constructor(headerContainer, mainContainer) {
        this.headerContainer = headerContainer;
        this.mainContainer = mainContainer;
        this.endpoint = "http://localhost:3001"  //client
        this.routes = {
            '/': async () => {
                const resJson = await this.get(`${this.endpoint}/`);
                this.render(resJson);
            },
            '/users/find': async () => {
                const resJson = await this.get(`${this.endpoint}/users/find`);
                this.render(resJson);
            },
            '/sessions/new': async () => {
                const resJson = await this.get(`${this.endpoint}/sessions/new`);
                this.render(resJson);
            },
            otherwise(path) {
                this.mainContainer.innerHTML = `${path} Not Found`;
            }
        }
    }

    init() {
        //history pop을 위한 이벤트 핸들러 설정
        window.addEventListener('popstate', event => {
            // 이전페이지 / 다음페이지 button이 클릭되면 router를 호출
            this.router(event.state.path);
        })

        //a 태그에 대한 라우팅 이벤트 핸들러 설정
        this.headerContainer.addEventListener("click", event => {
            if (!event.target || event.target.nodeName !== 'A') return;
            if (event.target.id === 'navigation-button-login') return;
            event.preventDefault();
            const path = event.target.getAttribute("href")
            history.pushState({ path }, null, path);    //history push
            this.router(path);
        })

        //웹페이지가 처음 로딩되었을 때
        // this.router('/');
    }

    async get(url) {
        const response = await fetch(url, { 
            method: "GET", 
            headers: {
                Accept: "application/json" 
            }
        });
        const data = await response.json();
        return data;
    }

    router(path) {
        (this.routes[path] || this.routes.otherwise)(path);
    }

    render(data) {
        this.mainContainer.innerHTML = `<h1>${data.title}</h1><p>${data.content}</p>`;
    }

    renderHtml(html) {
        this.mainContainer.innerHTML = html;
    }
}

module.exports = NavigationController;