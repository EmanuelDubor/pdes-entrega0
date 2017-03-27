import {Component} from "@angular/core";

@Component({
    selector: 'upvote',
    inputs: ['model', 'service'],
    template: `
        <button type="button" (click)="upvote(service, model)">Me gusta!</button>
    `
})
export default class UpvoteComponent {
    upvote(service, model) {
        service.upvote(model)
            .then(_ => model.upvotes++)
    }
}