import Image from "next/image";
import Logo from "../assets/logo.svg";
import AppleStoreIcon from "../assets/apple-store.svg";
import PlayStoreIcon from "../assets/play-store.svg";

const Footer = () => {
  return (
    <footer className="bg-[#002b5b] text-white pt-12 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo e descrição */}
        <div>
          <Image src={Logo} alt="Logo Itaú" width={48} height={48} />
          <p className="mt-4 text-sm text-gray-300">
            O Itaú está ao seu lado para te ajudar a realizar conquistas todos
            os dias. Simples, digital e humano.
          </p>
        </div>

        {/* Links úteis */}
        <div>
          <h4 className="font-semibold text-white mb-4">Institucional</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a
                href="#"
                className="hover:text-[#FF6C00] transition-colors duration-200"
              >
                Sobre o Itaú
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#FF6C00] transition-colors duration-200"
              >
                Carreiras
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#FF6C00] transition-colors duration-200"
              >
                Sustentabilidade
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#FF6C00] transition-colors duration-200"
              >
                Sala de imprensa
              </a>
            </li>
          </ul>
        </div>

        {/* Ajuda */}
        <div>
          <h4 className="font-semibold text-white mb-4">Ajuda</h4>
          <ul className="space-y-2 text-sm text-gray-300">
            <li>
              <a
                href="#"
                className="hover:text-[#FF6C00] transition-colors duration-200"
              >
                Central de atendimento
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#FF6C00] transition-colors duration-200"
              >
                Ouvidoria
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#FF6C00] transition-colors duration-200"
              >
                Perguntas frequentes
              </a>
            </li>
            <li>
              <a
                href="#"
                className="hover:text-[#FF6C00] transition-colors duration-200"
              >
                Acessibilidade
              </a>
            </li>
          </ul>
        </div>

        {/* Redes sociais + download de apps */}
        <div>
          <h4 className="font-semibold text-white mb-4">Conecte-se</h4>
          <div className="space-y-2 text-sm text-gray-300">
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-[#FF6C00] transition-colors duration-200"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#FF6C00] transition-colors duration-200"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#FF6C00] transition-colors duration-200"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-[#FF6C00] transition-colors duration-200"
                >
                  YouTube
                </a>
              </li>
            </ul>

            {/* Ícones das lojas */}
            <div className="flex items-center gap-4 mt-4">
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Baixar na App Store"
              >
                <Image
                  src={AppleStoreIcon}
                  alt="App Store"
                  width={120}
                  height={40}
                />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Baixar no Google Play"
              >
                <Image
                  src={PlayStoreIcon}
                  alt="Google Play"
                  width={120}
                  height={40}
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 mt-10 pt-6 text-sm text-gray-400 text-center">
        &copy; {new Date().getFullYear()} Itaú Unibanco. Todos os direitos
        reservados.
      </div>
    </footer>
  );
};

export default Footer;
