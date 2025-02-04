import React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Button from "./Ui/Button";

const slides = [
  {
    title: "Welcome to Subash Matric Higher Secondary School",
    subtitle: "EXCELLENCE IN EDUCATION",
    description:
      "Providing quality education and nurturing young minds to excel in academics, sports, and co-curricular activities.",
    image:
      "https://images.adsttc.com/media/images/63ff/6219/3552/d201/6f62/01cf/slideshow/aiko-educational-institution-taisei-design-planners-architects-and-engineers_1.jpg?1677681209",
  },
  {
    title: "Empowering Students for a Bright Future",
    subtitle: "HOLISTIC LEARNING EXPERIENCE",
    description: "Our school fosters a learning environment that promotes creativity, innovation, and leadership skills.",
    image: "https://images.adsttc.com/media/images/63ff/73e1/1a83/2553/84cd/01a6/slideshow/aiko-educational-institution-taisei-design-planners-architects-and-engineers_11.jpg?1677685744",
  },
  {
    title: "Admissions Open for 2025",
    subtitle: "JOIN US TODAY",
    description: "Be a part of our academic excellence and shape your future with the best education system.",
    image: "https://images.adsttc.com/media/images/63ff/73ea/1a83/2550/6c22/0ec2/slideshow/aiko-educational-institution-taisei-design-planners-architects-and-engineers_28.jpg?1677685858",
  },
];

export function HeroSection() {
  const slideRefs = useRef([]);
  const currentSlide = useRef(0);

  useEffect(() => {
    const duration = 1;
    const slideDelay = 5;

    const animateSlide = (index) => {
      const slide = slideRefs.current[index];
      if (!slide) return;

      gsap.fromTo(
        slide.querySelector(".slide-content"),
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration, ease: "power2.out" }
      );
      
      gsap.fromTo(
        slide.querySelector(".slide-bg"),
        { scale: 1.1 },
        { scale: 1, duration: duration * 2, ease: "power2.out" }
      );
    };

    const showNextSlide = () => {
      const currentSlideEl = slideRefs.current[currentSlide.current];
      if (!currentSlideEl) return;

      gsap.to(currentSlideEl, {
        opacity: 0,
        duration,
        onComplete: () => {
          currentSlideEl.style.display = "none";
          currentSlide.current = (currentSlide.current + 1) % slides.length;
          const nextSlideEl = slideRefs.current[currentSlide.current];
          if (!nextSlideEl) return;
          
          nextSlideEl.style.display = "block";
          gsap.to(nextSlideEl, { opacity: 1, duration });
          animateSlide(currentSlide.current);
        },
      });
    };

    slideRefs.current.forEach((slide, index) => {
      if (!slide) return;
      slide.style.display = index === 0 ? "block" : "none";
      if (index === 0) {
        gsap.set(slide, { opacity: 1 });
        animateSlide(0);
      }
    });

    const interval = setInterval(showNextSlide, slideDelay * 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[calc(100vh-4rem)] overflow-hidden">
      {slides.map((slide, index) => (
        <div key={index} ref={(el) => (slideRefs.current[index] = el)} className="absolute inset-0">
          <div
            className="slide-bg absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="container md:px-5 px-2 py-6 relative h-full">
            <div className="slide-content flex h-full flex-col justify-center gap-6 text-white">
              <p className="text-lg font-medium text-yellow-400">{slide.subtitle}</p>
              <h1 className="text-5xl font-bold leading-tight md:text-6xl lg:text-7xl">{slide.title}</h1>
              <p className="max-w-2xl text-lg text-gray-200">{slide.description}</p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-yellow-400 text-black hover:bg-yellow-500">
                  Learn More
                </Button>
                <Button size="lg" variant="outline" className="text-white hover:text-black">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
