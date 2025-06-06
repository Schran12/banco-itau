// src/components/WhyChooseItau.tsx
import Image from "next/image";
import TrustImg from "../assets/itau-trust.png"; // coloque aqui a imagem desejada

const WhyChooseItau = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col-reverse md:flex-row items-center gap-12">
      {/* Texto */}
      <div className="flex-1">
        <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6 leading-tight">
          Por que escolher o Itaú?
        </h2>
        <p className="text-gray-700 mb-6 text-lg">
          Com mais de 90 anos de história, o Itaú se reinventa todos os dias
          para oferecer soluções financeiras inovadoras e acessíveis.
        </p>
        <p className="text-gray-700 mb-6 text-lg">
          Nosso compromisso é com você: confiança, tecnologia de ponta e um
          atendimento que entende suas necessidades em qualquer etapa da vida.
        </p>
        <p className="text-gray-700 text-lg">
          Aqui, você encontra mais do que um banco. Você encontra um parceiro.
        </p>
      </div>

      {/* Imagem */}
      <div className="flex-1">
        <Image
          src={TrustImg}
          alt="Confiança no Itaú"
          className="rounded-xl shadow-xl"
          width={600}
          height={400}
        />
      </div>
    </section>
  );
};

export default WhyChooseItau;
