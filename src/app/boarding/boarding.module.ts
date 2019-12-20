import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { BoardingRoutingModule } from "./boarding-routing.module";
import { BoardingComponent } from "./boarding.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        BoardingRoutingModule
    ],
    declarations: [
        BoardingComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class BoardingModule { }
