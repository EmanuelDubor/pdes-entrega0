import {Component} from "@angular/core";

import PostService from "../services/post.service";

@Component({
    selector: 'app-view',
    template: `
        <h1>Bienvenidos a {{name}}</h1>
        <router-outlet></router-outlet>
    `,
    providers: [PostService]
})
export default class AppComponent {
    constructor() {
        this.name = 'Noticias UNQ'
    }
}
