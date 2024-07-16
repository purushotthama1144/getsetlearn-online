import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import { title } from 'process';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink , MatIconModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  footer_top_menu = [
    {
      title:"Call us",
      icon:"phone_iphone",
      contact:"+91 8792740014"
    },
    {
      title:"Email us",
      icon:"mail",
      contact:"mailus@getsetlearn.info"
    },
    {
      title:"Follow us",
      icon:"forward",
      contact:"",
      contact_list: [
        {
          icon:"add_circle",
          link:"https://www.instagram.com/getsetlearn.official/"
        },
        {
          icon:"add_circle",
          link:"https://www.linkedin.com/company/get-set-learn/"
        },
        {
          icon:"add_circle",
          link:"https://www.facebook.com/getsetlearn.official"
        },
      ]
    }
  ]

  footer_bottom_menu = [
    {
      main_title:"Get Set Learn",
      menu_list: [
        {
          menu_title:"About Us",
          link:"https://getsetlearn.info/about-us/"
        },
        {
          menu_title:"Contact Us",
          link:"https://getsetlearn.info/contact-us/"
        },
        {
          menu_title:"Register Your School",
          link:"https://cartlogin.getsetlearn.online/page/register-your-school"
        },
        {
          menu_title:"Join Us",
          link:"https://getsetlearn.info/careers/"
        },
      ]
    },
    {
      main_title:"SHOP",
      menu_list: [
        {
          menu_title:"Bulk Order",
          link:""
        },
      ]
    },
    {
      main_title:"CUSTOMER",
      menu_list: [
        {
          menu_title:"My Account",
          link:"https://cartlogin.getsetlearn.online/user/login?redirect=https:%2F%2Fcartlogin.getsetlearn.online%2Foauth%2Fauth%3Fclient_id%3DxDpc3GkZzfzBgwANYWlOEZ0is%26client_secret%3DVPG3J2ZxOWLZ0AyFxCk0woKLT%26redirect_uri%3Dhttps:%2F%2Fwww.getsetlearn.online%2Fcomplete%2Fauth%2F%26response_type%3Dcode%26scope%3Dpublic_profile"
        },
        {
          menu_title:"Track Order",
          link:"https://cartlogin.getsetlearn.online/page/track-order"
        },
        {
          menu_title:"Return & Exchange",
          link:"https://cartlogin.getsetlearn.online/page/return-and-exchange"
        },
        {
          menu_title:"Shipping Policies",
          link:"https://cartlogin.getsetlearn.online/page/shipping-policies"
        },
        {
          menu_title:"Privacy Policy",
          link:"https://cartlogin.getsetlearn.online/page/privacy-policy"
        },
        {
          menu_title:"Terms & Conditions",
          link:"https://cartlogin.getsetlearn.online/page/terms-of-use"
        },
      ]
    }
  ]
}