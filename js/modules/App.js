export default class App {


    constructor(){
        this.head = document.head;
        this.body = document.body;
        //this.footer = document.footer;
    }

    render(){
        this.createHead({
            title: 'Renderizando desde JS',
            links: ['css/style.css','css/hoja.css'],
        });

        this.createBody('../home.html');
    }

    createHead(config) {
        let titleElement = document.createElement('title');
        let titleText = document.createTextNode(config.title);
        titleElement.appendChild(titleText);

        this.head.appendChild(titleElement);

        for (const link of config.links) {
            let linkElement = document.createElement('link');
            linkElement.href = link;
            linkElement.rel = 'stylesheet';

            this.head.appendChild(linkElement);
        }
    }

    createBody(page){
        this.readPage(page);
    }

    readPage(page) {
        fetch(page)
            .then(res => res.text())
            .then(resInText => {
                this.body.innerHTML = resInText;
            });
    }

    createSteelSheet(url){
        let head = document.head;
    }
}