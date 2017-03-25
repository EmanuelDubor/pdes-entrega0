import "reflect-metadata";
import "zone.js";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";

import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import AppComponent from "./app/components/app.component";
import PostComponent from "./app/components/post.component";

@NgModule({
    imports: [BrowserModule],
    declarations: [
        AppComponent,
        PostComponent
    ],
    bootstrap: [AppComponent]
})
class AppModule {
}

platformBrowserDynamic().bootstrapModule(AppModule)
