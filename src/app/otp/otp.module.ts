import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { OtpRoutingModule } from "./otp-routing.module";
import { OtpComponent } from "./otp.component";
@NgModule({
    imports: [
        NativeScriptCommonModule,
        OtpRoutingModule
    ],
    declarations: [
        OtpComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class OtpModule { }
