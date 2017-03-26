import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import PostService from "../services/post.service";

@Component({
    selector: 'postDetail',
    inputs: ['post'],
    template: `
        <post [data]="post"></post>
        <postUpvote></postUpvote>
        <h2>Comentarios:</h2>
        <comment *ngFor="let comment of post.comments" [data]="comment"></comment>
        <newComment></newComment>
        <a [routerLink]="['/news']">Atras</a>
    `
})
export default class PostDetailComponent {
    constructor(route, postService) {
        this.route = route
        this.postService = postService
    }

    ngOnInit() {
        this.post = {}
        this.route.params.subscribe(params => {
            this.postService.getPost(params.someNew)
                .then(post => this.post = post)
                .catch(e => console.log(e))
        })
    }
}

PostDetailComponent.parameters = [
    ActivatedRoute, PostService
]