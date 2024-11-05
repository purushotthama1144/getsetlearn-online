import { Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { CoursesComponent } from './components/courses/courses.component';
import { CourseDetailComponent } from './components/course-detail/course-detail.component';

export const routes: Routes = [
    { path: '', component: LandingComponent , pathMatch: 'full' },
    { path: 'uj-filter/:name', component: CoursesComponent },
    { path: 'courses/:id', component: CourseDetailComponent },
    // { path: 'list/:link', component: },
    // { path: 'book/:subject/:id', component: ProductDetailComponent , data: { breadcrumb: 'Product List:link' }},
];
