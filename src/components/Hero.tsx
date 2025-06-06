"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import Img1 from "../assets/bg1.jpg";
import Img2 from "../assets/bg2.jpg";
import Img3 from "../assets/bg3.jpg";

const slides = [
  {
    image: Img1,
    title: "Com Itaú, tá feito",
    text: "Conte com o app Itaú para facilitar o seu dia.\nSimples e em poucos cliques.",
  },
  {
    image: Img2,
    title: "Segurança que você confia",
    text: "Protegemos suas informações com tecnologia avançada\npara você usar tranquilo.",
  },
  {
    image: Img3,
    title: "Atendimento sempre à mão",
    text: "Suporte e ajuda rápidos direto no app\nquando você precisar.",
  },
];

const Hero = () => {
  return (
    <section className="w-full relative">
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        loop
        className="w-full h-[500px]"
      >
        {slides.map(({ image, title, text }, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full flex items-center px-6 md:px-20 text-white">
              {/* Imagem de fundo */}
              <img
                src={image.src}
                alt={title}
                className="absolute top-0 left-0 w-full h-full object-cover"
              />

              {/* Overlay escuro para melhorar contraste */}
              <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-0" />

              {/* Conteúdo */}
              <div className="relative z-10 max-w-xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
                {text.split("\n").map((line, i) => (
                  <p key={i} className="mb-2 text-sm md:text-base leading-relaxed">
                    {line}
                  </p>
                ))}
                <button className="bg-[#ff6c00] px-6 py-3 rounded font-bold mt-4 hover:bg-[#e65b00] transition-colors shadow-md">
                  Confira
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Estilo global para as setas brancas */}
      <style jsx global>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: white !important;
        }
      `}</style>
    </section>
  );
};

export default Hero;

