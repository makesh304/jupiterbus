import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { CancelRoutingModule } from "./cancel-routing.module";
import { CancelComponent } from "./cancel.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        CancelRoutingModule
    ],
    declarations: [
        CancelComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class CancelModule { }
