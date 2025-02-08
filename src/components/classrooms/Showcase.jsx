import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { classrooms, festivals, events } from "./Data.jsx";
import React from "react";
import Dialog from "./Ui";

export default function Showcase() {
  const [selectedProject, setSelectedProject] = useState(null);
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);
  const row3Ref = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const rows = [
      { ref: row1Ref, direction: -1 },
      { ref: row2Ref, direction: 1 },
      { ref: row3Ref, direction: -1 },
    ];
    rows.forEach(({ ref, direction }) => {
      if (!ref.current) return;
      const items = ref.current.children;
      const totalWidth = Array.from(items).reduce((acc, item) => acc + item.clientWidth, 0);
      gsap.to(items, {
        x: direction * totalWidth,
        ease: "none",
        repeat: -1,
        duration: 40,
        scrollTrigger: {
          trigger: ref.current,
          start: "top center",
          end: "bottom center",
          toggleActions: "play pause resume pause",
        },
      });
    });
  }, []);

  const categories = [
    { ref: row1Ref, data: classrooms, title: "Classrooms" },
    { ref: row2Ref, data: festivals, title: "Festivals" },
    { ref: row3Ref, data: events, title: "Events" },
  ];

  return (
    <section className="w-full  text-white py-16 md:px-20 overflow-hidden">
      <div className="container mx-auto text-black text-center mb-12">
        <p className="text-sm uppercase tracking-wider mb-4">Explore Our School</p>
        <h2 className="text-4xl md:text-6xl font-bold mb-4">Discover Our Classrooms & Events</h2>
        <p className="text-gray-400">Experience the vibrant life of our school through our latest images, classrooms, trendy festivals, collections, and events.</p>
      </div>
      <div className="bg-black border-5 border-gray-200  shadow-[0_0_20px_rgba(139,92,246,0.3)] rounded-sm py-10 space-y-16">
        {categories.map(({ ref, data, title }, idx) => (
          <div key={idx} className="w-full">
            <h3 className="text-2xl font-semibold text-center mb-4">{title} </h3>
            <hr className="w-3/4 mx-auto mb-10" />
            <marquee direction={idx % 2 === 0 ? "left" : "right"} scrollamount="5" className="flex gap-8 w-full whitespace-nowrap">
              <div ref={ref} className="flex gap-8">
                {data.map((project) => (
                  <div
                    key={project.id}
                    className="relative shrink-0 w-[300px] md:w-[400px] aspect-video border-5 border-white border rounded-lg cursor-pointer group"
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="absolute inset-0 rounded-sm   bg-gradient-to-r from-white-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute inset-0 rounded-sm shadow-[0_0_20px_rgba(139,92,246,0.3)] group-hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-shadow" />
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-full object-cover rounded-sm"
                    />
                    <div className="absolute bottom-0 left-0 w-full bg-black/60 p-2 text-white text-center rounded-b-lg">
                      <h4 className="text-lg font-semibold">{project.title}</h4>
                      <p className="text-sm">{project.location || "Unknown Location"}</p>
                      <p className="text-xs text-gray-300">{project.date || "Date not available"}</p>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50 rounded-lg">
                      <p className="text-white font-medium">Tap to View</p>
                    </div>
                  </div>
                ))}
              </div>
            </marquee>
          </div>
        ))}
      </div>
      <Dialog open={!!selectedProject} onClose={() => setSelectedProject(null)}>
        {selectedProject && (
          <div className="grid gap-6">
            <img
              src={selectedProject.image || "/placeholder.svg"}
              alt={selectedProject.title}
              className="w-full rounded-lg"
            />
            <div>
              <h3 className="text-2xl font-bold mb-2">{selectedProject.title}</h3>
              <p className="text-gray-400">{selectedProject.description}</p>
              <p className="text-sm text-gray-500">Location: {selectedProject.location || "Unknown"}</p>
              <p className="text-sm text-gray-500">Date: {selectedProject.date || "Not available"}</p>
            </div>
          </div>
        )}
      </Dialog>
    </section>
  );
}
