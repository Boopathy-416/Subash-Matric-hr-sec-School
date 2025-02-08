import React from "react";
import { useState, useEffect } from "react";
import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import gsap from "gsap";
import { useRef } from "react";

const staffMembers = [
  {
    name: "John Doe",
    role: "Principal",
    image: "public/assets/icons/boses.png",
    description: "John Doe has over 20 years of experience in education."
  },
  {
    name: "Jane Smith",
    role: "Vice Principal",
    image: "public/assets/images/mas.png",
    description: "Jane Smith is dedicated to academic excellence."
  },
  {
    name: "Emily Johnson",
    role: "Mathematics Teacher",
    image: "public/assets/icons/icon bose.png",
    description: "Emily Johnson makes learning fun and engaging."
  },
  {
    name: "Michael Brown",
    role: "Science Teacher",
    image: "public/assets/icons/boses.png",
    description: "Michael Brown inspires students in the world of science."
  }
];

const StaffSlider = () => {
  const [index, setIndex] = useState(0);
  const cardRef = useRef(null);

  const nextSlide = () => {
    gsap.fromTo(cardRef.current, { opacity: 0, x: 100 }, { opacity: 1, x: 0, duration: 0.5 });
    setIndex((prevIndex) => (prevIndex + 1) % staffMembers.length);
  };

  const prevSlide = () => {
    gsap.fromTo(cardRef.current, { opacity: 0, x: -100 }, { opacity: 1, x: 0, duration: 0.5 });
    setIndex((prevIndex) => (prevIndex - 1 + staffMembers.length) % staffMembers.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000); // Auto-slide every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-50% flex-col bg-[#0e0d1e] items-center p-5">
      <h1 className="text-4xl font-bold py-4 text-center uppercase ">Meet Our Staff</h1>
      <div 
        ref={cardRef} 
        className="relative w-full max-w-2xl bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 p-6 rounded-lg shadow-[0_0_20px_rgba(255,215,0,0.8)] text-center border-4 border-yellow-300">
        <img
          src={staffMembers[index].image}
          alt={staffMembers[index].name}
          className="w-40 h-40 mx-auto rounded-full object-cover mb-4"
        />
        <h3 className="text-xl font-semibold text-white">{staffMembers[index].name}</h3>
        <p className="text-yellow-100">{staffMembers[index].role}</p>
        <p className="mt-2 text-yellow-200">{staffMembers[index].description}</p>
      </div>
      <div className="flex w-2/3  md:pt-5  justify-between items-center mt-4">
        <button onClick={prevSlide} className="p-2 text-white hover:bg-[#1d1d1d] hover:scale-105 rounded-full">
          <ArrowLeftCircle size={40} />
        </button>
        <button onClick={nextSlide} className="p-2 text-white hover:bg-[#1d1d1d] hover:scale-105  rounded-full">
          <ArrowRightCircle size={40} />
        </button>
      </div>
    </div>
  );
};

export default StaffSlider;