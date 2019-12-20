import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { LoignRoutingModule } from "./login-routing.module";
import { LoginComponent } from "./login.component";
@NgModule({
    imports: [
        NativeScriptCommonModule,
        LoignRoutingModule
    ],
    declarations: [
        LoginComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class LoginModule { }
