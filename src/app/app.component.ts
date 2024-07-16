import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./common-components/header/header.component";
import { FooterComponent } from "./common-components/footer/footer.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  toggleOverlay: boolean = false;
  receiveData(event:string) {
    // Ternary Code
    this.toggleOverlay = (event === "background-overlay");
   
    // Full code
    // if(event === "background-overlay") {
    //   this.toggleOverlay = true;
    // } else {
    //   this.toggleOverlay = false;
    // }
  }
}
