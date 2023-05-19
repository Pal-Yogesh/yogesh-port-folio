import React from "react";
import "./Testimonial.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { Pagination } from "swiper";
import "swiper/css/pagination";

import jovac from "../../img/jovac.png";
import java from "../../img/java.png";
import ml from "../../img/ml.png";
import htm_l from "../../img/htm_l.png";


const Testimonial = () => {
  const clients = [
    {
      
      img: jovac,
      review:
        "I finished a Web Development Internship Programme at JOVAC. Here, using HTML, CSS, and JavaScript, I can understand the notion of front-end programming.",
    },
    {
      img: java,
      review:
        "I achieved this by answering some basic questions in Hackerrank. Java is widely used object-oriented programming language that runs on billion devices .",
    },
    {
      img: ml,
      review:
        "Machine learning (ML) is a type of artificial intelligence (AI) that allows software applications to become more accurate at predicting outcomes without being explicitly.",
    },
    {
      img: htm_l,
      review:
        "HTML5 is a markup language used for structuring and presenting content on the World Wide Web.",
    },
  ];

 
  

  return (
    <div className="t-wrapper" id="testimonial">
      <div className="t-heading">
        <span>These certificates </span>
        <span>reflects my knowledge or demonstrate</span>
        <span> my education.</span>
      <div className="blur t-blur1" style={{ background: "var(--purple)" }}></div>
      <div className="blur t-blur2" style={{ background: "skyblue" }}></div>

      </div>
      <Swiper
        // install Swiper modules
        modules={[Pagination]}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {clients.map((client, index) => {
          return (
            <SwiperSlide key={index}>
              <div className="testimonial">
                <img src={client.img} alt="" />
                <span>{client.review}</span>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
  
};

export default Testimonial;

