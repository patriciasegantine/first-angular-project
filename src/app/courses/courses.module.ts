import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesComponent } from './courses.component';
import { CoursesDetailsComponent } from './courses-details/courses-details.component';
import { CoursesService } from './courses.service'

@NgModule({
  declarations: [
    CoursesComponent,
    CoursesDetailsComponent
  ],
  exports: [
    CoursesComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    CoursesService
  ]
})
export class CoursesModule {
}
