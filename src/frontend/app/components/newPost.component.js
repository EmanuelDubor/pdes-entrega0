import {Component} from "@angular/core";

@Component({
    selector: 'newPost',
    template: `
        <form>
            Nueva noticia:
            <input [(ngModel)]="data.title" placeholder="Titulo" name="title">
            <textarea [(ngModel)]="data.content" placeholder="Contenido" name="content"></textarea>

            <button type="button" (click)="onSubmit()">Submit</button>
        </form>`
})
export default class NewPostComponent {
    constructor() {
        this.data = {}
    }

    onSubmit() {
        console.log("Noticia creada", this.data)
    }
}