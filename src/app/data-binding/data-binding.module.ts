import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataBindingComponent } from "./data-binding.component";
import { NgbAlert } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    DataBindingComponent
  ],
  imports: [
    CommonModule,
    NgbAlert,
  ],
  exports: [
    DataBindingComponent
  ]
})
export class DataBindingModule {
}
