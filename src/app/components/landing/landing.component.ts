import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { GetCoursesService } from '../../service/get-courses.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule , CarouselModule , HttpClientModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})

export class LandingComponent implements OnInit{
  isDragging: boolean = false;
  banner_data = [
    {
      card_title: "Let's Make Learning Your Child’s Superpower with Get Set Learn",
      card_description: "Get access to a few premium courses and start your learning journey now",
      list: [
        'CBSE, ICSE and other Board courses',
        'Free, Live and self-paced online classes',
        'Coding, Math, and English for all grades',
        'Your 21st century skills delivered'
      ],
      card_link: "/login",
      card_logo_image_path: "https://d3aa8gez7qzufo.cloudfront.net/Home_Banner_Image_1.webp",
    },
  ]

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 300,
    nav: false,
    autoplay: false,
    autoplaySpeed: 1000,
    navText: ['<span class="prev arrow arrow-left">', '<span class="arrow arrow-right next"></span>'],
    responsive: {
      0: {
        items: 1
      },
      468: {
        items: 1
      },
      740: {
        items: 1
      },

    },
  }

  constructor(private getCoursesService:GetCoursesService ){}

  ngOnInit(): void {
    this.fetchCourses();
  }

  fetchCourses() {
    const sizeLimit = 1000000;
    this.getCoursesService.getCourses(sizeLimit).subscribe((val) => {
      // debugger;
      console.log(val)
    })
  }
}
