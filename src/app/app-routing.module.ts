import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

const routes: Routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "home", loadChildren: () => import("~/app/home/home.module").then((m) => m.HomeModule) },
    { path: "browse", loadChildren: () => import("~/app/browse/browse.module").then((m) => m.BrowseModule) },
    { path: "search", loadChildren: () => import("~/app/search/search.module").then((m) => m.SearchModule) },
    { path: "featured", loadChildren: () => import("~/app/featured/featured.module").then((m) => m.FeaturedModule) },
    { path: "settings", loadChildren: () => import("~/app/settings/settings.module").then((m) => m.SettingsModule) },
    { path: "login", loadChildren: () => import("~/app/login/login.module").then((m) => m.LoginModule) },
{ path: "cancel", loadChildren: () => import("~/app/cancel/cancel.module").then((m) => m.CancelModule) },
{ path: "boarding", loadChildren: () => import("~/app/boarding/boarding.module").then((m) => m.BoardingModule) },
{ path: "privacy", loadChildren: () => import("~/app/privacy/privacy.module").then((m) => m.PrivacyModule) },
{ path: "contact", loadChildren: () => import("~/app/contact/contact.module").then((m) => m.ContactModule) },
{ path: "register", loadChildren: () => import("~/app/register/register.module").then((m) => m.RegisterModule) },
{ path: "otp", loadChildren: () => import("~/app/otp/otp.module").then((m) => m.OtpModule) }




];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
