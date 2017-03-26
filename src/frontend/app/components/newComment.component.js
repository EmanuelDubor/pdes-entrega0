import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import PostService from "../services/post.service";

@Component({
    selector: 'newComment',
    template: `
        <form>
            Nuevo comentario:
            <textarea [(ngModel)]="data.body" placeholder="Contenido" name="body"></textarea>
            <input [(ngModel)]="data.author" placeholder="Autor" name="author">

            <button type="button" (click)="onSubmit()">Crear comentario</button>
        </form>`
})
export default class NewCommentComponent {
    constructor(route, postService) {
        this.data = {}
        this.route = route
        this.postService = postService
    }

    ngOnInit() {
        this.postId = ""
        this.route.params.subscribe(params => this.postId = params.someNew)
    }

    onSubmit() {
        this.postService.addComment(this.postId, this.data)
        this.data = {}
    }
}

NewCommentComponent.parameters = [
    ActivatedRoute, PostService
]
