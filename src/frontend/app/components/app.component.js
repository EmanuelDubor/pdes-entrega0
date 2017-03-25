import {Component} from "@angular/core";

@Component({
    selector: 'app-view',
    template: `
        <h1>Bienvenidos a {{name}}</h1>
        <post *ngFor="let item of posts" [data]=item></post>
    `
})
export default class AppComponent {
    constructor() {
        this.name = 'Noticias UNQ'
        this.posts = [
            {title: 'Noticia 1', content: 'Contenido 1', author: 'Claudio', upvotes: 0},
            {title: 'Noticia 2', content: 'Contenido 2', author: 'Claudio', upvotes: 0},
            {title: 'Noticia 3', content: 'Contenido 3', author: 'Claudio', upvotes: 0}
        ]
    }
}