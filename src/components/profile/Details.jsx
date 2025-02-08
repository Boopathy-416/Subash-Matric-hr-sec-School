import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";
import "./D.css";

gsap.registerPlugin(ScrollTrigger);

export default function Detail() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);

  useEffect(() => {
    const headingText = headingRef.current.innerText;
    headingRef.current.innerHTML = headingText
      .split("  ")
      .map(
        (char) =>
          `<span style='display: inline-block; transform: translateY(-100%); opacity: 0;'>${char}</span>`
      )
      .join(" ");

    const chars = headingRef.current.querySelectorAll("span");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "center center",
        scrub: 1,
      },
    });

    gsap.set(chars, { y: "-100%", opacity: 0 });

    tl.to(chars, {
      y: "0%",
      opacity: 1,
      duration: 1,
      stagger: 0.02,
      ease: "power2.out",
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-screen bg-[#e6e0d8] flex flex-col items-center justify-center px-4 py-20"
    >
      <div className="container max-w-6xl z-1 mx-auto">
        <div className="flex items-center gap-4 mb-16 opacity-80">
          <div className="h-px bg-black flex-1" />
          <p className="text-lg uppercase tracking-wider">
            Subash Matric Hr Sec School
          </p>
          <div className="h-px bg-black flex-1" />
        </div>

        <h5
          ref={headingRef}
          className="text-5xl uppercase md:text-8xl lg:text-9xl font-bold  leading-none tracking-loose text-white text-center mb-16 relative"
        >
          Championing Quality Learning
        </h5>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto text-center">
          <div
            className="rounded-md  pointer-events-none p-6 "
            // style={{
            //   backgroundImage: "url('/assets/images/ok book.png')",
            //   backgroundSize: "cover",
            //   backgroundPosition: "center",
            // }}
          >
            <div className="container backdrop-blur-xs  rounded-sm bg-[1c1c1c] border-[2px]  hover:bg-white hover:text-black hover:scale-105 hover:rounded-md shadow-[0_0_10px_rgba(0,0,0,1)] hover:shadow-[0_0_10px_rgba(0,0,0,1)] px-3 py-4">
              <h2 className="text-xl font-bold mb-2">Academic Excellence</h2>
              <p className="text-black font-semibold ">
                We nurture top-ranking students with a rigorous curriculum and
                dedicated faculty.
              </p>
            </div>
          </div>
          <div
            className="rounded-md cursor-pointer  p-6 "
            // style={{
            //   backgroundImage: "url('/assets/images/win.png')",
            //   backgroundSize: "cover",
            //   backgroundPosition: "center",
            // }}
          >
            <div className="container backdrop-blur-xs  rounded-sm bg-[1c1c1c] border-[2px] px-2 hover:bg-white hover:text-black hover:scale-105 hover:rounded-md shadow-[0_0_10px_rgba(0,0,0,1)] hover:shadow-[0_0_10px_rgba(0,0,0,1)]  py-4">
              <h2 className="text-xl font-bold mb-2">
                State-of-the-Art Facilities
              </h2>
              <p>
                Our digital classrooms, modern labs, and vast library create an
                enriching environment.
              </p>
            </div>
          </div>
          <div
            className="rounded-md pointer-events-none    p-6 "
            // style={{
            //   backgroundImage: "url('/assets/images/future.png')",
            //   backgroundSize: "cover",
            //   backgroundPosition: "center",
            // }}
          >
            <div className="container backdrop-blur-xs rounded-sm  border-[2px]  hover:bg-white hover:text-black hover:scale-125 hover:rounded-md shadow-[0_0_10px_rgba(0,0,0,1)] hover:shadow-[0_0_10px_rgba(0,0,0,1)] py-4">
              <h2 className="text-xl font-bold mb-2">Future Leaders</h2>
              <p>
                We instill knowledge, discipline, and confidence to shape the
                leaders of tomorrow.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
