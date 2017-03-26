import {Component} from "@angular/core";

import PostService from "../services/post.service";

@Component({
    selector: 'newPost',
    template: `
        <form>
            Nueva noticia:
            <input [(ngModel)]="data.title" placeholder="Titulo" name="title">
            <textarea [(ngModel)]="data.content" placeholder="Contenido" name="content"></textarea>

            <button type="button" (click)="onSubmit()">Crear Noticia</button>
            <form>
    `
})
export default class NewPostComponent {
    constructor(postService) {
        this.data = {}
        this.postService = postService
    }

    onSubmit() {
        this.postService.create(data)
        this.data = {}
    }
}

NewPostComponent.parameters = [
    PostService
]