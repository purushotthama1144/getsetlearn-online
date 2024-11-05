import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { NavigationEnd, Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedService } from '../../service/shared-service.service';
import { filter } from 'rxjs';
import { GetCoursesService } from '../../service/get-courses.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule , FormsModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  scrolled: boolean = false;
  toggleMenu: boolean = false;
  showFiller = false;
  headerClass: any;
  addClass: any;
  searchText: string = '';
  inputExpanded: boolean = false;
  navigationUrl = "";
  navigationName:string = "";
  @Output("sendOverlay") sendOverlay = new EventEmitter<any>();
  toggleOverlay:boolean = false;
  allCourses:any = [];
  categories:any = [];
  
  navigationMenuItems = [
    {
      name:"All Courses",
    },
    {
      name:"Industrial Expereince - Career",
    },
    {
      name:"Test Prep",
    },
    {
      name:"STEM/Programming/Coding",
    },
    {
      name:"Foundation Courses",
    },
    {
      name:"AI-Enhanced Learning",
    },
    {
      name:"Co-curricular Courses",
    },
    {
      name:"Tutoring/Adaptive Learning",
    },
    {
      name:"Language Learning",
    },
  ]

  constructor(public router:Router , private sharedService: SharedService , private getCoursesService: GetCoursesService) {}

  ngOnInit(): void {
    // this.fetchCourseCategory()
  }

  fetchCourseCategory() {
    const sizeLimit = 1000000;

    this.getCoursesService.getCourseList().subscribe((val) => {
      this.allCourses = val.results;
      console.log("All Courses", this.allCourses);

      this.categories = [...new Set(this.allCourses.flatMap((item:any) => item.data.category))];

      console.log("Course Category", this.categories);
     
    })
  }

  navigateToUrl(menu: any) {
    this.navigationName = menu
    let urlReplace = menu.replace(/ /g, "-").replace(/\//g, "-")
    this.router.navigate(['/uj-filter/', urlReplace.toLowerCase()]).then(() => {
      this.navigationUrl = this.router.url
      this.sharedService.setNavigationUrl(this.navigationUrl);
      this.sharedService.setNavigationName(this.navigationName);
    });
  }
  
  clickEvent(){
    this.toggleMenu = !this.toggleMenu;       
    if(this.toggleMenu) {
      this.sendOverlay.emit("background-overlay");
    } else {
      this.sendOverlay.emit("");
    }
  }

  removeClass(){
    this.toggleMenu = !this.toggleMenu; 
  }

  openLogin() {
    this.router.navigate(['https://cartlogin.getsetlearn.online/user/login?redirect=https:%2F%2Fcartlogin.getsetlearn.online%2Foauth%2Fauth%3Fclient_id%3DxDpc3GkZzfzBgwANYWlOEZ0is%26client_secret%3DVPG3J2ZxOWLZ0AyFxCk0woKLT%26redirect_uri%3Dhttps:%2F%2Fwww.getsetlearn.online%2Fcomplete%2Fauth%2F%26response_type%3Dcode%26scope%3Dpublic_profile'])
  }
  
  toggleInput() {
    if (!this.inputExpanded) {
      this.inputExpanded = true;
    } else {
      this.searchContent();
    }
  }
  
  searchContent() {
    console.log('Searching for:', this.searchText);
  }

  ngOnDestroy() {
    this.toggleMenu = false;
    this.sendOverlay.emit("");
  }
}
