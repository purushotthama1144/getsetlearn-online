import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetCoursesService {
  // baseurl = "https://www.getsetlearn.online/search/";
  jsonResponse = 'assets/response.json'

  constructor(private httpClient: HttpClient) { }

  // getCourses(size_limit:number): Observable<any> {
    // const formData = new FormData();
    // formData.append('size_limit', size_limit.toString());
    // return this.httpClient.post(`${this.baseurl}course_discovery/`, formData);
  // }

  getCourseList() {
    return  this.httpClient.get<any>(this.jsonResponse);
  }
}