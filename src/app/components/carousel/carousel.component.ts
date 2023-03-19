import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() images: string[] = [];
  @Input() showNavigation: boolean = true;
  @Input() showIndicators: boolean = true;
  currentSlideIndex: number = 0;

  constructor() { }

  ngOnInit() {
  }

  next() {
    if (this.currentSlideIndex === this.images.length - 1) {
      this.currentSlideIndex = 0;
    } else {
      this.currentSlideIndex++;
    }
  }

  prev() {
    if (this.currentSlideIndex === 0) {
      this.currentSlideIndex = this.images.length - 1;
    } else {
      this.currentSlideIndex--;
    }
  }

  goToSlide(index: number) {
    this.currentSlideIndex = index;
  }

  isCurrentSlideIndex(index: number): boolean {
    return this.currentSlideIndex === index;
  }
}
