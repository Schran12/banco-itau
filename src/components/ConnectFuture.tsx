import FinanceFutureImg from "../assets/finance-future.png";

const ConnectFuture = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-20 flex flex-col md:flex-row items-center gap-12">
      <div className="flex-1 text-left">
        <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6 leading-tight">
          Conecte-se ao futuro financeiro
        </h2>
        <p className="text-gray-700 mb-8 max-w-md">
          Descubra como o app Itaú transforma seu jeito de gerenciar dinheiro,
          com segurança, agilidade e muita inovação ao seu alcance.
        </p>
        <button className="bg-[#FF6C00] hover:bg-[#e65b00] transition-colors text-white font-semibold px-8 py-3 rounded-lg shadow-md">
          Saiba mais
        </button>
      </div>
      <div className="flex-1 md:ml-40">
        <img
          src={FinanceFutureImg.src}
          alt="Futuro financeiro"
          className="w-full max-w-md mx-auto md:mx-0 rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default ConnectFuture;
