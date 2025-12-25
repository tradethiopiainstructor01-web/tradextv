import { useEffect } from 'react';

const Slider = () => {
  useEffect(() => {
    class SliderClip {
      el: HTMLElement;
      Slides: HTMLElement[];
      Nav: HTMLAnchorElement[];
      totalSlides: number;
      current: number;
      autoPlay: boolean;
      timeTrans: number;
      IndexElements: number[];

      constructor(el: HTMLElement) {
        this.el = el;
        this.Slides = Array.from(this.el.querySelectorAll('li')) as HTMLElement[];
        this.Nav = Array.from(this.el.querySelectorAll('aside a')) as HTMLAnchorElement[];
        this.totalSlides = this.Slides.length;
        this.current = 0;
        this.autoPlay = true; //true or false
        this.timeTrans = 4000; //transition time in milliseconds
        this.IndexElements = [];

        for (let i = 0; i < this.totalSlides; i++) {
          this.IndexElements.push(i);
        }

        this.setCurret();
        this.initEvents();
      }

      setCurret() {
        this.Slides[this.current].classList.add('current');
        this.Nav[this.current].classList.add('current_dot');
      }

      initEvents() {
        const self = this;

        this.Nav.forEach(dot => {
          dot.addEventListener('click', (ele) => {
            ele.preventDefault();
            this.changeSlide(this.Nav.indexOf(dot as HTMLAnchorElement));
          });
        });

        this.el.addEventListener('mouseenter', () => self.autoPlay = false);
        this.el.addEventListener('mouseleave', () => self.autoPlay = true);

        setInterval(function () {
          if (self.autoPlay) {
            self.current = self.current < self.Slides.length - 1 ? self.current + 1 : 0;
            self.changeSlide(self.current);
          }
        }, this.timeTrans);
      }

      changeSlide(index: number) {
        this.Nav.forEach(allDot => allDot.classList.remove('current_dot'));

        this.Slides.forEach(allSlides => allSlides.classList.remove('current'));

        this.Slides[index].classList.add('current');
        this.Nav[index].classList.add('current_dot');
      }
    }

    const sliderElement = document.querySelector('.slider') as HTMLElement;
    if (sliderElement) {
      const slider = new SliderClip(sliderElement);
    }
  }, []);

  return null;
};

export default Slider;