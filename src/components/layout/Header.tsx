import {  closeBlack, closeIcon, menu, menuBlack } from "@/assets";
import { useEffect, useState } from "react";

export function Header({ dark }: { dark?: boolean }) {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const [isFixed, setIsFixed] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 78 ? setIsFixed(true) : setIsFixed(false);
    });
  });

  return (
    <header
      className={`w-full flex items-center px-24 2xl:px-40 py-8 xs:justify-center lg:justify-between  z-20 border-b ${
        dark ? "text-zinc-500" : "border-[#ffffff50]"
      } ${isFixed ? `fixed top-0 left-0 ${dark ? 'bg-white' : 'backdrop-blur-md bg-[#00000090]'}` : ''}`}
    >
      <div className="relative xs:w-full lg:w-auto justify-center items-center xs:flex lg:block">
        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="xs:block absolute -left-14 lg:hidden"
        >
          <img src={dark ? menuBlack : menu} className="w-6" alt="" />
        </button>

        <a
          href="#"
          className={`${
            dark ? "text-black" : "text-white"
          } text-lg font-InterBlack`}
        >
          Grupo Singil
        </a>
      </div>

      <nav
        onClick={() => setOpenMenu(false)}
        className={`lg:block xs:fixed lg:relative xs:h-screen
          lg:h-auto top-0 left-0 xs:w-full lg:w-auto
          xs:bg-[#00000099] xs:z-50 lg:z-auto
          lg:bg-transparent transition duration-150
          ${
            openMenu
              ? "-translate-x-0 delay-100"
              : "xs:-translate-x-full lg:-translate-x-0"
          }
          `}
      >
        <ul
          className={`xs:flex-col relative flex lg:flex-row lg:items-center xs:items-start
           gap-x-8 xs:h-screen lg:h-auto xs:bg-[#333] lg:bg-transparent xs:w-9/12 
           lg:w-auto ${dark ? "xs:bg-white" : "xs:bg-[#333]"}
           xs:p-6 lg:p-0 xs:gap-y-4
           `}
        >
          <button
            onClick={() => setOpenMenu(false)}
            className="xs:block absolute right-4 lg:hidden"
          >
            <img src={dark ? closeBlack : closeIcon} className="w-6" alt="" />
          </button>

          <li>
            <a
              href="/"
              className={`text-sm ${dark ? "text-black" : "text-white"}`}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="/about_us"
              className={`text-sm ${dark ? "text-black" : "text-white"}`}
            >
              Sobre nós
            </a>
          </li>
          <li>
            <a
              href="/#services"
              className={`text-sm ${dark ? "text-black" : "text-white"}`}
            >
              Serviços
            </a>
          </li>
          <li>
            <a
              href="/portfolio"
              className={`text-sm ${dark ? "text-black" : "text-white"}`}
            >
              Portofolio
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`text-sm ${dark ? "text-black" : "text-white"}`}
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="/documents"
              className={`text-sm flex items-center gap-4 ${
                dark ? "text-black" : "text-white"
              }`}
            >
              Documentos{" "}
            </a>
          </li>
          <li>
            <a
              href="#contacts"
              className={`text-sm flex items-center gap-4 ${
                dark ? "text-black" : "text-white"
              }`}
            >
              Contactos
            </a>
          </li>
        </ul>
      </nav>

      <ul className="lg:block xs:hidden">
        <li>
          <a
            href=""
            className="px-6 py-4 text-white bg-colors-primary-color rounded-lg text-sm"
          >
            Assinar
          </a>
        </li>
      </ul>
    </header>
  );
}
