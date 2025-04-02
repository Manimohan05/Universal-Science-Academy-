import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import kuganSir from "../image/kugansir.png";
import chemistrtsir from "../image/chemistry sir.jpg";
import banner2 from "../image/Blue and Yellow Illustrated Digital Marketing Video (5).jpg";
import video from "../image/video.mp4";
import timetable2 from "../image/time table.jpg";
import timetable1 from "../image/phytimetable.jpg";
import backgroundImage from "../image/back.png";
import banner1 from "../image/bannernew.jpg";
import banner5 from "../image/bannernew1.jpg";
import timetable from "../image/timetable.png"

const HomePage = () => {
  return (
    <div className="relative bg-secondary text-primary px-6 md:px-12 lg:px-20 xl:px-32">
      {/* Background Image */}
      <div
        className="bg-fixed absolute inset-0 bg-cover bg-center opacity-50"
        style={{ backgroundImage: `url(${backgroundImage})` ,backgroundSize: "contain", // Adjusts size to fit within the screen
        backgroundRepeat: "repeat",
        backgroundPosition: "center",
        width: "100%",opacity:0.1}}
      ></div>
      {/* Content */}
      <div className="relative">
      <section className="w-full mt-4 h-[25vh] md:h-[100vh] flex items-center justify-center relative">
  <Swiper
    modules={[Navigation, Pagination, Autoplay]}
    navigation
    pagination={{ clickable: true }}
    autoplay={{ delay: 5000, disableOnInteraction: false }}
    className="w-full h-full"
  >
    <SwiperSlide className="flex items-center justify-center">
      <video className="w-full h-full object-cover rounded-lg" autoPlay loop muted playsInline>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </SwiperSlide>
  </Swiper>
</section>

        <section className="py-8 text-center w-full flex flex-col items-center">
          <h2 className="text-4xl md:text-6xl font-extrabold animate-pulse uppercase">Admissions Open!</h2>
          <p className="mt-2 text-2xl md:text-3xl font-semibold text-black">Enroll now for the best learning experience.</p>
          <Link
            to="/admissions"
            className="mt-6 bg-primary text-white text-2xl md:text-3xl px-12 py-4 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Enroll Now
          </Link>
        </section>

      {/* Teachers Details Section */}
<section className="py-8 text-center max-w-5xl mx-auto">
  <h2 className="text-4xl font-bold mb-6">Our Teachers</h2>
  <div className="flex flex-wrap justify-center gap-5 mt-2">
    {[
      { name: "M.Kugan", degree: "BSc (Hons), Dip in Edu", img: kuganSir, subject: "Physics Sir" },
      { name: "T.Sharangan", degree: "BSc - R", img: chemistrtsir, subject: "Chemistry Sir" }
    ].map((teacher, index) => (
      <div key={index} className="w-100 bg-white shadow-lg rounded-lg text-black p-4">
        <h3 className="text-lg font-semibold mb-2">{teacher.subject}</h3>
        <img src={teacher.img} alt={teacher.name} className="w-full h-48 object-cover rounded-lg" />
        <h3 className="text-xl font-bold mt-2">{teacher.name}</h3>
        <p className="text-sm">{teacher.degree}</p>
      </div>
    ))}
  </div>
</section>


        {/* Classes Section */}
        <section className="py-8 text-center max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-6">Our Classes</h2>
          <div className="flex justify-center gap-6 mt-6 flex-wrap">
            {[timetable1, timetable2].map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Class Timetable"
                className="w-full max-w-md rounded-lg shadow-md object-cover mb-6"
              />
            ))}
          </div>
          <Link to="/class" className="text-bold text-2xl md:text-3xl">
            Click for more...
          </Link>
        </section>

        <section className="w-full py-8 overflow-hidden relative">
  <div className="flex w-max animate-marquee">
    {[banner1, banner2, banner5, banner1, banner2, banner5,timetable].map((img, index) => (
      <div key={index} className="flex-shrink-0 px-4">
        <img
          src={img}
          alt={`Banner Slide ${index + 1}`}
          className="h-40 w-auto object-cover rounded-lg shadow-lg"
        />
      </div>
    ))}
  </div>
</section>

<section className="py-8 text-center w-full">
  <h2 className="text-4xl font-bold mb-4">Our Location</h2>
  <div className="relative w-full max-w-[600px] h-64 md:h-[400px] mx-auto">
    <iframe
      className="w-full h-full"
      src="https://maps.google.com/maps?q=P2XH+PR%20Chunnakam%20LAUGFS%20ECO%20SRI%20-%20Chunnakam%20Vehicle%20Emission%20Testing%20Center&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
      frameBorder="0"
      scrolling="no"
      allowFullScreen
    ></iframe>
  </div>
</section>


      </div>
    </div>
  );
};


export default HomePage;
