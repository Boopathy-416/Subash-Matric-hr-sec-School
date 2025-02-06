import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "./Ui";

gsap.registerPlugin(ScrollTrigger);

export default function Profile() {
  const nameRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { ease: "power4.out" },
    });

    const words = nameRef.current.innerText.split(' ');
    nameRef.current.innerHTML = words.map(word => 
      `<span class="inline-block">${word}</span>`
    ).join(' ');

    const nameParts = nameRef.current.querySelectorAll('span');

    tl.from(nameParts, { opacity: 1, y: 100, duration: 5, stagger: 0.2 })
      .from(imageRef.current, { opacity: 1, y: 20, duration: 5, stagger: 0.5 })
      .from(textRef.current, { opacity: 1, y: 20, duration: 1, stagger: 0.5  })
      .from(buttonRef.current, { opacity: 1, y: 20, duration: 0.5, stagger: 0.5  });
  }, []);

  return (
    <section className="min-h-screen  bg-[#e6e1dc] flex items-center justify-center py-4 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-center h-full">
        {/* Name Section */}
        <h1
          ref={nameRef}
          className="text-[clamp(3rem,10vw,6rem)] uppercase font-bold leading-none tracking-tighter text-center md:text-left"
        >
          SUBASH MATRIC HigheR SECondary SCHOOL
        </h1>

        {/* Image Section */}
        <div ref={imageRef} className="relative  w-full max-w-xs mx-auto md:max-w-sm aspect-square">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Subhas_Chandra_Bose_%28tokyo%29.JPG/640px-Subhas_Chandra_Bose_%28tokyo%29.JPG"
            alt="Founder"
            className="object-cover rounded-lg w-full h-full"
          />
        </div>

        {/* Text and Button Section */}
        <div className="space-y-6 text-center justify-center md:text-left">
            <h1 className="uppercase text-center md:text-start font-black ">sindu.suppuramani </h1>
          <p ref={textRef} className="text-lg font-semibold md:text-xl text-neutral-800">
            Our school is committed to providing trustworthy and high-quality education, 
            ensuring a child-free from worries and nurtured in a positive learning environment. With a strong foundation in academic excellence and ethical values, we empower students to excel and shape a brighter future.
          </p>
          <div ref={buttonRef} className="flex justify-center py-5 md:justify-start">
            <Button variant="ghost" className="bg-[#424242]  hover:bg-[#1d1d1d] hover:text-white hover:border-white border-white border-4 text-black rounded-full px-8 py-2 text-lg font-medium">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}