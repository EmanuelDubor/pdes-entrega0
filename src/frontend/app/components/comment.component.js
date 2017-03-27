import {Component} from "@angular/core";

@Component({
    selector: 'comment',
    inputs: ['data'],
    template: `
        <article class="comment">
            {{data.body}}
            <footer class="author">{{data.author}}</footer>
        </article>
    `
})
export default class CommentComponent {
}