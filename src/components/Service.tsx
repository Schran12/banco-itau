"use client";
import {
  FaCreditCard,
  FaMoneyBillWave,
  FaPiggyBank,
  FaMobileAlt,
  FaShieldAlt,
  FaUserFriends,
} from "react-icons/fa";

const services = [
  {
    icon: <FaCreditCard size={28} />,
    title: "Cartões",
    description: "Crédito, débito e muito mais. Escolha o ideal pra você.",
  },
  {
    icon: <FaMoneyBillWave size={28} />,
    title: "Empréstimos",
    description: "Com taxas justas e contratação 100% digital.",
  },
  {
    icon: <FaPiggyBank size={28} />,
    title: "Conta",
    description: "Sem mensalidade, com tudo que você precisa no dia a dia.",
  },
  {
    icon: <FaMobileAlt size={28} />,
    title: "App Itaú",
    description: "Completo, intuitivo e seguro. Tudo na palma da sua mão.",
  },
  {
    icon: <FaShieldAlt size={28} />,
    title: "Seguros",
    description: "Proteja o que importa com planos sob medida.",
  },
  {
    icon: <FaUserFriends size={28} />,
    title: "Investimentos",
    description: "Faça seu dinheiro render com segurança e autonomia.",
  },
];

export default function Service() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl text-center md:text-5xl font-extrabold text-black mb-6 leading-tight">
          Tudo o que você precisa em um só lugar
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl border border-gray-200 hover:border-[#ff6c00] transition-all duration-300 shadow-sm hover:shadow-md cursor-pointer bg-white text-left"
            >
              <div className="mb-3 text-[#ff6c00]">{service.icon}</div>
              <h3 className="text-md font-semibold text-[#2c2c2c] mb-1">
                {service.title}
              </h3>
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
