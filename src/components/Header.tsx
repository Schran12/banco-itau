"use client";
import Image from "next/image";
import { useState } from "react";
import Logo from "../assets/logo.svg";
import IconUser from "../assets/icon-user.svg";
import { FiSearch, FiMenu, FiX } from "react-icons/fi";

const menuItems = ["Para você", "Para empresas", "Serviços", "Ajuda"];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#FF6C00] shadow-md h-20 flex items-center">
      <div className="max-w-7xl mx-auto w-full px-4 flex items-center justify-between">
        {/* LOGO + MENU */}
        <div className="flex items-center gap-6">
          <Image
            src={Logo}
            alt="Logo Itaú"
            width={48}
            height={48}
            priority
            className="cursor-pointer"
          />

          {/* Menu desktop */}
          <nav className="hidden md:block">
            <ul className="flex gap-12 text-white font-semibold text-base">
              {menuItems.map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:underline underline-offset-4 decoration-2 transition-all duration-200"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Busca + Botão desktop */}
        <div className="hidden md:flex items-center gap-6">
          <div className="relative w-48">
            <input
              type="search"
              placeholder="Buscar"
              className="
                w-full
                border-b border-white
                bg-transparent
                text-white
                placeholder-white/70
                focus:outline-none
                focus:border-[#FFC300]
                transition-colors
                py-1.5
                pr-12
                text-sm
                font-semibold
              "
            />
            <FiSearch className="w-5 h-5 cursor-pointer text-white absolute right-3 top-1/2 -translate-y-1/2" />
          </div>

          <button
            type="button"
            className="flex items-center gap-2 cursor-pointer bg-[#005BA1] hover:bg-[#00487a] transition-colors duration-300 px-5 py-2 rounded text-white font-semibold text-sm"
          >
            <Image src={IconUser} alt="Ícone usuário" width={20} height={20} />
            <span>Acessar conta</span>
          </button>
        </div>

        {/* Botão hamburger mobile */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Menu mobile */}
      {open && (
        <nav className="md:hidden bg-[#FF6C00] w-full absolute top-20 left-0 shadow-lg">
          <ul className="flex flex-col gap-4 p-4 text-white font-semibold text-base">
            {menuItems.map((item) => (
              <li key={item}>
                <a
                  href="#"
                  className="block py-2 hover:underline underline-offset-4 decoration-2 transition-all duration-200"
                  onClick={() => setOpen(false)}
                >
                  {item}
                </a>
              </li>
            ))}
            <li>
              <button
                type="button"
                className="w-full flex items-center justify-center gap-2 bg-[#005BA1] hover:bg-[#00487a] transition-colors duration-300 px-5 py-2 rounded text-white font-semibold text-sm"
                onClick={() => setOpen(false)}
              >
                <Image
                  src={IconUser}
                  alt="Ícone usuário"
                  width={20}
                  height={20}
                />
                Acessar conta
              </button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
