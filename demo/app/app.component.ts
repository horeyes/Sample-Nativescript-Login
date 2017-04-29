import { Component } from "@angular/core";
import { Page } from "ui/page";

@Component({
    selector: "Login",
    templateUrl: "app.component.html",
})
export class LoginAppComponent {
    public title: string;
    public slogan: string;


constructor(private page: Page) {
    this.page.actionBarHidden = true;
    this.title = "App Name";
    this.slogan = "A simple Login Screen imported via Npm";
   

}

}
