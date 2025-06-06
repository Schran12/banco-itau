// src/components/CallToAction.tsx

const CallToAction = () => {
  return (
    <section className="bg-[#FF6C00] text-white py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          Abra sua conta em minutos
        </h2>
        <p className="text-lg md:text-xl mb-8">
          Sem burocracia, direto do seu celular. Tudo o que você precisa em um só lugar.
        </p>
        <button className="bg-white cursor-pointer text-[#FF6C00] font-semibold px-8 py-4 rounded-lg shadow-md hover:bg-gray-100 transition-colors">
          Começar agora
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
