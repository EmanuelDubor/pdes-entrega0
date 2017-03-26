import {Component} from "@angular/core";
import {ActivatedRoute} from "@angular/router";
import PostService from "../services/post.service";

@Component({
    selector: 'postUpvote',
    template: `
        <button type="button" (click)="upvote()">Me gusta!</button>
    `
})
export default class PostDetailComponent {
    constructor(route, postService) {
        this.route = route
        this.postService = postService
    }

    ngOnInit() {
        this.postId = ""
        this.route.params.subscribe(params => this.postId = params.someNew)
    }

    upvote() {
        this.postService.upvote(this.postId)
    }
}

PostDetailComponent.parameters = [
    ActivatedRoute, PostService
]