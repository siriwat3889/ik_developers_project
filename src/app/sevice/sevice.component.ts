import { Component } from '@angular/core';
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-sevice',
  standalone: true,
  imports: [NgFor],
  templateUrl: './sevice.component.html',
  styleUrls: ['./sevice.component.css']
})
export class SeviceComponent {
  currentIndex = 0;
  serveiceData = [
    {
      imageSrc: 'assets/service/1.svg',
      title: 'Web Design & Development',
      text: 'A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.',
    },
    {
      imageSrc: 'assets/service/1.svg',
      title: 'Software Testing Service',
      text: 'A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.',
    },
    {
      imageSrc: 'assets/service/1.svg',
      title: 'Mobile App Development',
      text: 'A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.',
    },
    {
      imageSrc: 'assets/service/1.svg',
      title: 'Digital Marketing',
      text: 'A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.',
    },
    {
      imageSrc: 'assets/service/1.svg',
      title: 'SEO Optimization',
      text: 'A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.',
    },
    {
      imageSrc: 'assets/service/1.svg',
      title: 'Content Creation',
      text: 'A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.',
    }
  ];

  
  nextSlide() {
    // เลื่อนไปข้างหน้า แต่จำกัดให้อยู่ภายในจำนวนการ์ดทั้งหมด
    if (this.currentIndex < this.serveiceData.length - 3) {
      this.currentIndex++;
      
      // เพิ่มดีเลย์ก่อนการเปลี่ยนแปลง
      setTimeout(() => {
        const sliderContainer = document.querySelector('.slider-container') as HTMLElement;
        sliderContainer.style.transform = `translateX(-${this.currentIndex * 20}%)`; // เปลี่ยนแปลงตามความต้องการ
      }, 0); // 200ms delay before applying the transform
    }
  }
  

  prevSlide() {
    // เลื่อนถอยหลัง แต่จำกัดไม่ให้เกิน 0
    if (this.currentIndex > 0) {
      this.currentIndex--;
      
      // เพิ่มดีเลย์ก่อนการเปลี่ยนแปลง
      setTimeout(() => {
        const sliderContainer = document.querySelector('.slider-container') as HTMLElement;
        sliderContainer.style.transform = `translateX(-${this.currentIndex * 20}%)`; // ปรับค่าตามที่ต้องการ
      }, 0); // 200ms delay before applying the transform
    }
  }
  
}
