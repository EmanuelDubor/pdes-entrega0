import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

@Injectable()
export default class PostService {
    constructor(http) {
        this.http = http
        this._posts = []
        this.http.get("/news").toPromise()
            .then(response => this._posts.push(...response.json()))
            .catch(err => console.log(err))
    }

    get posts() {
        return this._posts;
    }

    create(post) {
        this.http.post("/news", JSON.stringify(post), {headers: {'Content-Type': 'application/json'}})
            .toPromise()
            .then(response => this._posts.push(response.json()))
            .catch(err => console.log(err))
    }

    addComment(post, comment) {
        return this.http.post(`/news/${post._id}/comments`, JSON.stringify(comment), {headers: {'Content-Type': 'application/json'}})
            .toPromise()
            .then(response => response.json())
            .catch(err => console.log(err))
    }

    getPost(postId) {
        return this.http.get(`/news/${postId}`).toPromise()
            .then(response => response.json());
    }

    upvote(post) {
        return this.http.put(`/news/${post._id}/upvote`).toPromise()
            .then(response => response.json())
            .catch(err => console.log(err))
    }
}

PostService.parameters = [
    Http
]