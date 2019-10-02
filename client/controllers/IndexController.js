//출처: https://poiemaweb.com/js-spa
class IndexController {
    constructor(headerContainer, mainContainer) {
        this.headerContainer = headerContainer;
        this.mainContainer = mainContainer;
        this.api = "http://localhost:3000"
        this.routes = {
            '/': async () => {
                const resJson = await this.get(`${this.api}/data/index.json`);
                this.render(resJson);
            },
            '/search': async () => {
                const resJson = await this.get(`${this.api}/data/search.json`);
                this.render(resJson);
            },
            '/login': async () => {
                const resJson = await this.get(`${this.api}/data/login.json`);
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

        //라우팅 이벤트 핸들러 설정
        this.headerContainer.addEventListener("click", event => {
            if (!event.target || event.target.nodeName !== 'A') return;
            event.preventDefault();
            const path = event.target.getAttribute("href")
            history.pushState({ path }, null, path);    //history push
            this.router(path);
        })

        //웹페이지가 처음 로딩되었을 때
        this.router('/');
    }

    async get(url) {
        const response = await fetch(url, { method: "GET", Accept: "application/json" });
        const data = await response.json();
        return data;
    }

    render(data) {
        this.mainContainer.innerHTML = `<h1>${data.title}</h1><p>${data.content}</p>`;
    }

    renderHtml(html) {
        this.mainContainer.innerHTML = html;
    }

    router(path) {
        (this.routes[path] || this.routes.otherwise)(path);
    }
}

module.exports = IndexController;