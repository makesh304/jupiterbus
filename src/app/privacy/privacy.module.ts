import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { PrivacyRoutingModule } from "./privacy-routing.module";
import { PrivacyComponent } from "./privacy.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
PrivacyRoutingModule    ],
    declarations: [
        PrivacyComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class PrivacyModule { }
