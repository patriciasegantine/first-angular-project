import { Component } from '@angular/core';
import { CoursesService } from "./courses.service";

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  portalName: string

  courses: string[]

  constructor(private coursesService: CoursesService) {
    this.portalName = 'https://github.com'

    // const service = new CoursesService()

    // for (let i = 0; i < this.courses.length; i++) {
    //   let course = this.courses[i]
    // }

    this.courses = this.coursesService.getCourses()

  }
}
