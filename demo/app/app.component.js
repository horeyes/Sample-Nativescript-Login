"use strict";
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var LoginAppComponent = (function () {
    function LoginAppComponent(page) {
        this.page = page;
        this.page.actionBarHidden = true;
        this.title = "App Name";
        this.slogan = "A simple Login Screen imported via Npm";
    }
    return LoginAppComponent;
}());
LoginAppComponent = __decorate([
    core_1.Component({
        selector: "Login",
        templateUrl: "app.component.html",
    }),
    __metadata("design:paramtypes", [page_1.Page])
], LoginAppComponent);
exports.LoginAppComponent = LoginAppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEwQztBQUMxQyxnQ0FBK0I7QUFNL0IsSUFBYSxpQkFBaUI7SUFLOUIsMkJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQzFCLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztRQUNqQyxJQUFJLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQztRQUN4QixJQUFJLENBQUMsTUFBTSxHQUFHLHdDQUF3QyxDQUFDO0lBRzNELENBQUM7SUFFRCx3QkFBQztBQUFELENBQUMsQUFiRCxJQWFDO0FBYlksaUJBQWlCO0lBSjdCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsT0FBTztRQUNqQixXQUFXLEVBQUUsb0JBQW9CO0tBQ3BDLENBQUM7cUNBTXdCLFdBQUk7R0FMakIsaUJBQWlCLENBYTdCO0FBYlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFBhZ2UgfSBmcm9tIFwidWkvcGFnZVwiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJMb2dpblwiLFxuICAgIHRlbXBsYXRlVXJsOiBcImFwcC5jb21wb25lbnQuaHRtbFwiLFxufSlcbmV4cG9ydCBjbGFzcyBMb2dpbkFwcENvbXBvbmVudCB7XG4gICAgcHVibGljIHRpdGxlOiBzdHJpbmc7XG4gICAgcHVibGljIHNsb2dhbjogc3RyaW5nO1xuXG5cbmNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSkge1xuICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICAgIHRoaXMudGl0bGUgPSBcIkFwcCBOYW1lXCI7XG4gICAgdGhpcy5zbG9nYW4gPSBcIkEgc2ltcGxlIExvZ2luIFNjcmVlbiBpbXBvcnRlZCB2aWEgTnBtXCI7XG4gICBcblxufVxuXG59XG4iXX0=