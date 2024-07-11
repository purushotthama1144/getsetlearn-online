import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedService } from '../../service/shared-service.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule , FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {
  scrolled: boolean = false;
  loginDialog: boolean = false;
  signupDialog: boolean = false;
  toggleMenu: boolean = false;
  showFiller = false;
  headerClass: any;
  addClass: any;
  searchText: string = '';
  inputExpanded: boolean = false;
  navigationUrl = "";
  navigationName:string = "";
  
  navigationMenuItems = [
    {
      name:"All Courses",
    },
    {
      name:"Industrial Expereince-Career",
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

  constructor(public router:Router , private sharedService: SharedService) { }

  ngOnInit(): void {

  }

  gotoHomepage() {
    console.log("clicked")
    this.router.navigate(['/'])
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
  }

  removeClass(){
    this.toggleMenu = !this.toggleMenu; 
  }

  openLogin() {
    this.loginDialog = true;
    this.signupDialog = false;
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
}
