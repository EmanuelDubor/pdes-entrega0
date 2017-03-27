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

    addComment(postId, comment) {
        return this.http.post(`/news/${postId}/comment`, JSON.stringify(comment), {headers: {'Content-Type': 'application/json'}})
            .toPromise()
            .then(response => this.updatePost(response.json()))
            .catch(err => console.log(err))
    }

    getPost(postId) {
        return this.http.get(`/news/${postId}`).toPromise()
            .then(response => response.json());
    }

    upvote(post) {
        return this.http.put(`/news/${post._id}/upvote`).toPromise()
            .then(response => this.updatePost(response.json()))
            .catch(err => console.log(err))
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