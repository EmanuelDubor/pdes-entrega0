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
            .then(response => this._posts.push(post))
            .catch(err => console.log(err))
    }

    getPost(id) {
        return this.http.get(`/news/${id}`).toPromise()
            .then(response => response.json());
    }

    upvote(postId) {
        return this.http.put(`/news/${postId}/upvote`).toPromise()
            .then(response => {
                return this.updatePost(response.json())
            })
    }

    updatePost(updatedPost) {
        this._posts.forEach((post, index) => {
            if (post.id == updatedPost.id)
                this._posts[index] = updatedPost
        })
        return updatedPost
    }
}
PostService.parameters = [
    Http
]