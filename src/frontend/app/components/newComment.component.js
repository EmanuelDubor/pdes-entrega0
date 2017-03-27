import {Component} from "@angular/core";
import PostService from "../services/post.service";

@Component({
    selector: 'newComment',
    inputs: ['post'],
    template: `
        <form>
            <h2>Nuevo comentario:</h2>
            <textarea [(ngModel)]="data.body" placeholder="Contenido" name="body"></textarea>
            <input [(ngModel)]="data.author" placeholder="Autor" name="author">

            <button type="button" (click)="onSubmit(post)">Crear comentario</button>
        </form>`
})
export default class NewCommentComponent {
    constructor(postService) {
        this.data = {}
        this.postService = postService
    }

    onSubmit(post) {
        this.postService.addComment(post, this.data)
            .then(addedComment => post.comments.push(addedComment))
        this.data = {}
    }
}

NewCommentComponent.parameters = [
    PostService
]
