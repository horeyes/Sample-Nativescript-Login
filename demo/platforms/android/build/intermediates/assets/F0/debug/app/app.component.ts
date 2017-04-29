import { Component } from "@angular/core";

@Component({
    selector: "Login",
    templateUrl: "app.component.html",
})
export class AppComponent {
    public title: string;
    public slogan: string;

constructor() {
    this.title = "App Name";
    this.slogan = "A simple Login Screen imported via Npm";

}

}
