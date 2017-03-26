import {Injectable} from "@angular/core";

@Injectable()
export default class PostService {
    constructor() {
        this._posts = [
            {title: 'Noticia 1', content: 'Contenido 1', author: 'Claudio', upvotes: 1},
            {title: 'Noticia 2', content: 'Contenido 2', author: 'Claudio', upvotes: 3},
            {title: 'Noticia 3', content: 'Contenido 3', author: 'Claudio', upvotes: 0}
        ]
    }

    get posts() {
        return this._posts
    }

    create(post) {
        this._posts.push(post)
    }
}