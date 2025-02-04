import React from "react";

function Award() {
  return (
    <section
      className="min-h-screen "
      style={{
        backgroundImage: 'url("https://images.adsttc.com/media/images/63ff/73e8/1a83/2550/6c22/0ebf/slideshow/aiko-educational-institution-taisei-design-planners-architects-and-engineers_22.jpg?1677685815")',
        backgroundSize: "cover",
        backgroundAttachment: "fixed",
      }}
    >
      <main>
        {/* Small placeholder */}
        <div className="h-[100px]"></div>

        {/* Gallery */}
        <div
          id="gallery"
          className="flex items-center whitespace-nowrap overflow-hidden relative"
        >
          <div className="marquee flex">
            {[
              "https://img.freepik.com/free-photo/winner-concept-with-golden-helmet_23-2149059975.jpg",
              "https://img.freepik.com/free-photo/assortment-different-medals_23-2148930701.jpg",
              "https://img.freepik.com/free-photo/smiling-young-female-barber-uniform-medal-raising-winner-cup-with-hair-clippers-isolated-olive-green-wall_141793-91602.jpg",
              "https://img.freepik.com/free-photo/winner-concept-with-golden-balloons_23-2149059967.jpg",
              "https://img.freepik.com/free-vector/anniversary-template-with-ornaments_23-2147791347.jpg",
              "https://img.freepik.com/free-vector/graduation-cap-education-icon-vector-gold-digital-graphic_53876-114078.jpg",
              "https://img.freepik.com/free-vector/silhouettes-men-racing_1048-1470.jpg",
            ].map((src, index) => (
              <div
                key={index}
                className={`${
                  index === 1 || index === 5
                    ? "w-[50vw] md:w-[15vw] md:h-[10vh] h-[10vh]"
                    : "md:w-[18.333vw] w-[30vw]"
                } p-3 flex-shrink-0 flex-grow-0`}
              >
                <img
                  src={src}
                  onError={(e) => {
                    e.target.src =
                      "https://via.placeholder.com/400x600?text=Image+Unavailable";
                  }}
                  className="w-full block border-[5px] rounded-sm"
                  alt={`Gallery Item ${index + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </main>
    </section>
  );
}

export default Award;
