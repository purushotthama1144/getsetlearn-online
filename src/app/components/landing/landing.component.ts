import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CarouselModule, OwlOptions } from 'ngx-owl-carousel-o';
import { GetCoursesService } from '../../service/get-courses.service';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule , CarouselModule , HttpClientModule , MatButtonModule , MatIconModule , MatSelectModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})

export class LandingComponent implements OnInit{
  isDragging: boolean = false;
  filterCourses:any = [];
  ageGroups:any = [];
  filterLanguages:any;
  allCourses:any[] = [];
  defaultCourses: any[] = [];
  courseUrl: string = '';
  isPopupVisible: boolean = false;
  isCopied: boolean = false;
  
  
  gradeCategories: { [key: string]: string[] } = {
    'Grade 9-12': ["Class 9", "Class 10", "Class 11", "Class 12"],
    'Grade 6-8': ["Class 6", "Class 7", "Class 8"],
    'Grade 3-5': ["Class 3", "Class 4", "Class 5"],
    'Pre-primary to Grade 2': ["Class 1", "Class 2"]
  };

  selectedGradeCategory: string = "";
  filteredGrades: string[] = [];

  grades = [
    'Pre-primary to Grade 2', 'Grade 3-5' , 'Grade 6-8', 'Grade 9-12'
  ]

  imageString = 'https://www.getsetlearn.school/'

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

  customBanner: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 300,
    nav: false,
    autoplay: false,
    autoplaySpeed: 1000,
    margin:10,
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

  partner_data = [
    {
      name:"Mindler IMMRSE",
      image:"https://d3aa8gez7qzufo.cloudfront.net/Immerse.png"
    },
    {
      name:"Rizee",
      image:"https://d3aa8gez7qzufo.cloudfront.net/Rizee.png"
    },
    {
      name:"Global Etiquette",
      image:"https://d3aa8gez7qzufo.cloudfront.net/Global_Etiquette.png"
    },
    {
      name:"Cerebry",
      image:"https://d3aa8gez7qzufo.cloudfront.net/Cerebry.png"
    },
    {
      name:"Lodestar",
      image:"https://d3aa8gez7qzufo.cloudfront.net/Lodestar.png"
    },
    {
      name:"IMMRSE",
      image:"https://d3aa8gez7qzufo.cloudfront.net/Mindler_immrse_165x165.jpg"
    },
    {
      name:"EnableM",
      image:"https://d3aa8gez7qzufo.cloudfront.net/EnableM.png"
    },
    {
      name:"Unlu",
      image:"https://d3aa8gez7qzufo.cloudfront.net/Unluclass.png"
    },
    {
      name:"DuckLearning",
      image:"https://d3aa8gez7qzufo.cloudfront.net/DuckLearning.png"
    },
    {
      name:"Plethora",
      image:"https://d3aa8gez7qzufo.cloudfront.net/Plethora.png"
    },
    {
      name:"KidEx",
      image:"https://d3aa8gez7qzufo.cloudfront.net/Kidex.png"
    },
    {
      name:"SpeedLabs",
      image:"https://d3aa8gez7qzufo.cloudfront.net/Spedlabs.png"
    },
    {
      name:"SpellQuest",
      image:"https://d3aa8gez7qzufo.cloudfront.net/Spelquest.png"
    },
    {
      name:"SparkStudio",
      image:"https://d3aa8gez7qzufo.cloudfront.net/Spark_Studio.png"
    },
    {
      name:"GarudTech",
      image:"https://d3aa8gez7qzufo.cloudfront.net/Garud_Tech.png"
    },
  ]

  customPartner: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 300,
    nav: true,
    autoplay: true,
    autoplaySpeed: 500,
    margin:10,
    navText: ['<span class="prev arrow arrow-left">', '<span class="arrow arrow-right next"></span>'],
    responsive: {
      0: {
        items: 1
      },
      468: {
        items: 3
      },
      740: {
        items: 5
      },

    },
  }

  courseListing: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 300,
    nav: true,
    autoplay: false,
    autoplaySpeed: 500,
    margin:20,
    navText: ['<span class="prev arrow arrow-left">', '<span class="arrow arrow-right next"></span>'],
    responsive: {
      0: {
        items: 1
      },
      468: {
        items: 3
      },
      740: {
        items: 4
      },

    },
  }

  constructor(private getCoursesService:GetCoursesService , private router: Router){}

  ngOnInit(): void {
    this.fetchCourses();
  }

  fetchCourses() {
    const sizeLimit = 1000000;
    // this.getCoursesService.getCourses(sizeLimit).subscribe((val) => {
      // debugger;
      // console.log(val)
    // })

    this.getCoursesService.getCourseList().subscribe((val) => {
      this.defaultCourses = val.results;
      this.allCourses = [...this.defaultCourses];
      this.ageGroups = [...new Set(this.allCourses.flatMap((item: any) => item.data.age_group))];
      this.filterCourses = Object.keys(val.facets.content_type.terms);
    })
  }

  onGradeCategoryChange(selectedCategory: string) {
    this.selectedGradeCategory = selectedCategory;
    this.filteredGrades = this.gradeCategories[selectedCategory] || [];
    console.log("Filtered Grades:", this.filteredGrades);
    if (selectedCategory) {
      this.allCourses = this.defaultCourses.filter((course: any) => 
        course.data.grade.includes(this.filteredGrades)
      // console.log(course.data.grade)
      );
    } else {
      this.allCourses = [...this.defaultCourses];
    }
    console.log(`Filtered Courses for type "${selectedCategory}":`, this.allCourses);
  }

  filterCourse(selectedType: string) {
    if (selectedType) {
      this.allCourses = this.defaultCourses.filter((course: any) => 
        course.data.content_type.includes(selectedType)
      );
    } else {
      this.allCourses = [...this.defaultCourses];
    }
    console.log(`Filtered Courses for type "${selectedType}":`, this.allCourses);
  }

  gotoCourseDetail(courseId:any) {
    console.log("Single course detail", courseId);
    this.router.navigate(['/courses', courseId]);
  }

  shareUrl(id:any) {
    const base_url = 'https://www.getsetlearn.online/courses/';
    const course_id = id;
    const about_course = "/about";
    this.courseUrl = `${base_url}${course_id}${about_course}`;
    this.isPopupVisible = true;
  }

  closePopup() {
    this.isPopupVisible = false;
  }

  copyToClipboard() {
    const listener = (e: ClipboardEvent) => {
      e.clipboardData?.setData('text/plain', this.courseUrl);
      e.preventDefault();
    };
    document.addEventListener('copy', listener);
    document.execCommand('copy');
    document.removeEventListener('copy', listener);

    this.isCopied = true;
  }
}