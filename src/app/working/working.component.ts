import { Component } from '@angular/core';
import { NgFor,NgClass } from '@angular/common';

@Component({
  selector: 'app-working',
  standalone: true,
  imports: [NgFor,NgClass],
  templateUrl: './working.component.html',
  styleUrl: './working.component.css'
})
export class WorkingComponent {
  listNameData=[{
    imageSrc: 'assets/working/p2.svg',
    imageStar: 'assets/working/star.svg',
    name:'Romeena De Silva',
    position: 'Janet Cosmetics'
  },{
    imageSrc: 'assets/working/p3.svg',
    imageStar: 'assets/working/star.svg',
    name:'Romeena De Silva',
    position: 'Janet Cosmetics'
  },{
    imageSrc: 'assets/working/p1.svg',
    imageStar: 'assets/working/star.svg',
    name:'Imran Khan',
    position: 'Software Engineer'
  },{
    imageSrc: 'assets/working/p4.svg',
    imageStar: 'assets/working/star.svg',
    name:'Romeena De Silva',
    position: 'Janet Cosmetics'
  },{
    imageSrc: 'assets/working/p5.svg',
    imageStar: 'assets/working/star.svg',
    name:'Romeena De Silva',
    position: 'Janet Cosmetics'
  }
]
}
