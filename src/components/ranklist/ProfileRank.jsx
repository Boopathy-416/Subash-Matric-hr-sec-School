import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";

gsap.registerPlugin(ScrollTrigger);

export default function SchoolRank() {
  const counterRef = useRef(null);
  const numbersRef = useRef([]);

  const stats = [
    {
      title: "Total Students",
      value: 1200,
      suffix: "+",
      icon: <div className="w-20 h-20 rounded-sm " >
        <img className="rounded-full " src="https://media.giphy.com/media/bpKAgX7H27xHDDUdEh/giphy.gif?cid=790b7611eeu56rktf88w2s17icpy5brobbr1r7fendo9ki0f&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="no image"></img>
      </div>,
      bgColor: "bg-gray-900",
    },
    {
      title: "Certified Staff Members",
      value: 85,
      suffix: "+",
      icon: (
        <div className="w-20 h-20">
          <img className="rounded-full" src="https://media.giphy.com/media/z2bQyDAkfmImZLvBZ3/giphy.gif?cid=790b7611ycfy5asirq1iewg8jouiz3p0vo3ti5b4f2rlhpdb&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="no image"></img>
          {/* <svg viewBox="0 0 100 100" className="w-full h-full">
            <polygon points="50,10 90,90 10,90" className="fill-green-600" />
            <polygon points="30,40 70,40 50,70" className="fill-teal-600" />
            <polygon points="40,30 60,30 50,50" className="fill-orange-400" />
          </svg> */}
        </div>
      ),
      bgColor: "bg-yellow-300",
    },
    {
      title: "Online Classes Conducted",
      value: 5000,
      suffix: "+",
      icon: (
        <div className="relative w-20 h-20">
          <img className="rounded-full" src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExN3RlaW1rbmNqZDdvOHp3ZmsxcGE4NG9haHoyeXFvM2xsMGZka2RqbyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8t7lXR6Sep8zB6v7El/giphy.gif" alt="no image"></img>
          {/* <div className="absolute inset-0 bg-purple-500 rotate-0" />
          <div className="absolute inset-0 bg-blue-600 rotate-6" />
          <div className="absolute inset-0 bg-green-600 rotate-12" /> */}
        </div>
      ),
      bgColor: "bg-neutral-300",
    },
    {
      title: "Affiliated Trusts",
      value: 10,
      suffix: "",
      icon: (
        <div className="w-20 h-20">
          <img  className="rounded-full" src="https://media.giphy.com/media/FWlYxfFYDU8uhQv8bv/giphy.gif?cid=790b7611vop10vav78lrrekkdsshjy8qjypfrctlc8pv8v1j&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="no image"></img>
          {/* <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M20,40 Q50,0 80,40 Q50,80 20,40" className="fill-purple-500" />
            <path d="M20,60 Q50,20 80,60 Q50,100 20,60" className="fill-amber-600" />
          </svg> */}
        </div>
      ),
      bgColor: "bg-orange-500",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      numbersRef.current.forEach((number, index) => {
        if (number) {
          gsap.from(number, {
            textContent: 0,
            duration: 2,
            ease: "power1.inOut",
            snap: { textContent: 1 },
            stagger: 1,
            scrollTrigger: {
              trigger: counterRef.current,
              start: "top center",
              toggleActions: "play none none reverse",
            },
          });
        }
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div ref={counterRef} className="w-full ">
      <div className="max-w-9xl mx-auto ">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-1 border-y-[5px] border-white md:pb-20  ">
          {stats.map((stat, index) => (
            <div
              key={stat.title}
              className={`${stat.bgColor} p-8 flex flex-col items-center justify-center text-center min-h-[300px]  transition-transform `}
            >
              <h3 className="text-2xl font-medium mb-6 text-white">{stat.title}</h3>
              <div className="text-6xl font-bold mb-8 text-white">
                <span ref={(el) => (numbersRef.current[index] = el)}>{stat.value}</span>
                {stat.suffix}
              </div>
              {stat.icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
