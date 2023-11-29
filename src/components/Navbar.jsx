"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { TiThMenu, TiTimes } from "react-icons/ti";
import Dropdown from "./Dropdown";

export default function Navbar({ className }) {
  const [navbar, setNavbar] = useState(false);
  const [isTransparent, setIsTransparent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsTransparent(true);
      } else {
        setIsTransparent(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const menu = [
    { name: "Sobre", url: "about" },
    { name: "Portfólio", url: "/#portfolio" },
  ];
  return (
    <header className="">
      <nav
        className={
          "fixed w-full bg-[#050A26] shadow " +
          (isTransparent ? "translucent-bg" : "")
        }
      >
        <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
          <div>
            <div className="flex items-center justify-between py-5 md:py-5 md:block">
              <Link href="/" className="">
                <div className="avatar">
                  <div className="w-auto rounded">
                    {/* <img src="" /> */}
                    <h1 className="avatar-text text-3xl text-white font-bold">
                      Diogo Sarti
                    </h1>
                  </div>
                </div>
              </Link>
              <div className="md:hidden">
                <button
                  className="p-2 text-gray-700 rounded-md outline-none"
                  onClick={() => setNavbar(!navbar)}
                >
                  {navbar ? (
                    <TiTimes fontSize={26} className="text-white" />
                  ) : (
                    <TiThMenu fontSize={26} className="text-white" />
                  )}
                </button>
              </div>
            </div>
          </div>
          <div>
            <div
              className={`flex-1 justify-self-center pb-10 mt-8 md:block md:pb-0 md:mt-0 ${
                navbar ? "block" : "hidden"
              }`}
            >
              <ul className="text-lg items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                {menu.map(({ name, url, dropdown }, index) => (
                  <li key={index} className="text-white">
                    {dropdown ? (
                      <Dropdown name={name} dropdownItems={dropdown} />
                    ) : (
                      <button
                        onClick={() => {
                          scrollIntoView(url), setNavbar(false);
                        }}
                        href="#"
                      >
                        {name}
                      </button>
                    )}
                  </li>
                ))}
                <li>
                  <button
                    onClick={() => {
                      scrollIntoView("contratar"), setNavbar(false);
                    }}
                    className="hover:text-white hover:bg-transparent text-[#050A26] transition-all bg-white p-3 rounded-full border-2 border-white btn-contratar"
                  >
                    Contratar
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export const scrollIntoView = (id) => {
  let element = document.getElementById(id);
  if (!element) return;
  element.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "start",
  });
};
