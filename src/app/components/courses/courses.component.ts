import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../service/shared-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})

export class CoursesComponent implements OnInit {
  navigationUrl: string = "";
  navigationName: string = "";
  subscriptionUrl: Subscription = new Subscription;
  subscriptionName: Subscription = new Subscription;
  
  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.getUrl();
  }

  getUrl() {
    this.subscriptionUrl = this.sharedService.currentNavigationUrl.subscribe(url => {
      this.navigationUrl = url;
    });
    
    this.subscriptionName = this.sharedService.currentNavigationMenu.subscribe(name => {
      this.navigationName = name;
    });
  }

  // ngOnDestroy(): void {
  //   if (this.subscriptionUrl) {
  //     this.subscriptionUrl.unsubscribe();
  //   }
  //   if (this.subscriptionName) {
  //     this.subscriptionName.unsubscribe();
  //   }
  // }
}