import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetCoursesService } from '../../service/get-courses.service';

@Component({
  selector: 'app-course-detail',
  standalone: true,
  imports: [],
  templateUrl: './course-detail.component.html',
  styleUrl: './course-detail.component.scss'
})

export class CourseDetailComponent {
  courseId:any;
  allCourses:any = [];
  courseData:any;

  constructor(private activatedRoute: ActivatedRoute , private getCoursesService: GetCoursesService){};


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        this.courseId = params['id'];
        console.log(this.courseId)
        this.fetchCourses();
      });
  };

  fetchCourses() {
    this.getCoursesService.getCourseList().subscribe((val) => {
      this.allCourses = val.results;
      this.courseData = this.allCourses.find((course: any) => course.data.id === this.courseId);
      console.log(this.courseData )
    })
  }
}
