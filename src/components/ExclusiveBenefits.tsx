// src/components/ExclusiveBenefits.tsx
import { FaPiggyBank, FaShieldAlt, FaRobot } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";

const benefits = [
  {
    icon: <FaPiggyBank size={36} className="text-[#FF6C00]" />,
    title: "Cashback e Investimentos",
    description:
      "Ganhe ao gastar e invista com segurança diretamente pelo app.",
  },
  {
    icon: <FaShieldAlt size={36} className="text-[#FF6C00]" />,
    title: "Segurança Total",
    description:
      "Tecnologia avançada para garantir a proteção dos seus dados e transações.",
  },
  {
    icon: <FaRobot size={36} className="text-[#FF6C00]" />,
    title: "Atendimento Inteligente",
    description:
      "Soluções rápidas com o Itaú Assistente e suporte 24h por chat.",
  },
  {
    icon: <MdPhoneIphone size={36} className="text-[#FF6C00]" />,
    title: "Tudo na palma da mão",
    description:
      "Controle sua vida financeira com poucos toques, de onde estiver.",
  },
];

const ExclusiveBenefits = () => {
  return (
    <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-6 leading-tight">
          Benefícios exclusivos no app
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="mb-4 flex justify-center">{benefit.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-900">
                {benefit.title}
              </h3>
              <p className="text-gray-700 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExclusiveBenefits;
