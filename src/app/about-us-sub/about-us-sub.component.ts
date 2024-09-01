import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-about-us-sub',
  standalone: true,
  imports: [NgFor],
  templateUrl: './about-us-sub.component.html',
  styleUrl: './about-us-sub.component.css'
})
export class AboutUsSubComponent {
  contactUs =[
    {
      imageSrc: 'assets/about-us-sub/logo-1.svg',
    },{
    imageSrc: 'assets/about-us-sub/logo-9.svg',
  },{
    imageSrc: 'assets/about-us-sub/logo-8.svg',
  },{
    imageSrc: 'assets/about-us-sub/logo-5.svg',
  },{
    imageSrc: 'assets/about-us-sub/logo-7.svg',
  },{
    imageSrc: 'assets/about-us-sub/logo-10.svg',
  },{
    imageSrc: 'assets/about-us-sub/logo-6.svg',
  },{
    imageSrc: 'assets/about-us-sub/logo-3.svg',
  }

  ]
}
