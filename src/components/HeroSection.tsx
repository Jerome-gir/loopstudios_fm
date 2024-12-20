import HeroMobileImage from "../assets/mobile/image-hero.jpg"
import HeroDesktopImage from "../assets/desktop/image-hero.jpg"
import HamburgerMenu from "../assets/icon-hamburger.svg"
import logo from "../assets/logo.svg"
import iconClose from "../assets/icon-close.svg"
import { useState } from "react"

export default function HeroSection() {
  const [open, setOpen] = useState(false)

  return (
    <section className="relative h-screen">
      <img
        src={HeroMobileImage}
        alt="Hero section"
        className="absolute inset-0 object-cover md:hidden"
      />
      <img
        src={HeroDesktopImage}
        alt="Hero section"
        className="absolute inset-0 object-cover w-full hidden md:block"
      />
      <div className="relative z-10 flex flex-col items-center h-full px-6 text-center text-white md:items-start md:px-20">
        <div className="absolute top-0 left-0 w-full p-8 flex justify-between items-center md:p-32">
          <a href="/">
            <img className="md:w-80" src={logo} alt="logo" />
          </a>
          <img
            className={`md:hidden ${open ? "hidden" : "block cursor-pointer"}`}
            src={HamburgerMenu}
            width={24}
            height={16}
            alt="menu hamburger"
            onClick={() => setOpen(!open)}
          />
          <nav className="hidden md:flex gap-10 text-xl font-Alata list-none">
            <a href="/">
              <li className="relative group">
                <span className="group-hover:before:scale-x-100 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-full before:h-[2px] before:bg-white before:scale-x-0 before:origin-left before:transition-transform">
                  About
                </span>
              </li>
            </a>
            <a href="/">
              <li className="relative group">
                <span className="group-hover:before:scale-x-100 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-full before:h-[2px] before:bg-white before:scale-x-0 before:origin-left before:transition-transform">
                  Careers
                </span>
              </li>
            </a>
            <a href="/">
              <li className="relative group">
                <span className="group-hover:before:scale-x-100 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-full before:h-[2px] before:bg-white before:scale-x-0 before:origin-left before:transition-transform">
                  Events
                </span>
              </li>
            </a>
            <a href="/">
              <li className="relative group">
                <span className="group-hover:before:scale-x-100 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-full before:h-[2px] before:bg-white before:scale-x-0 before:origin-left before:transition-transform">
                  Products
                </span>
              </li>
            </a>
            <a href="/">
              <li className="relative group">
                <span className="group-hover:before:scale-x-100 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-full before:h-[2px] before:bg-white before:scale-x-0 before:origin-left before:transition-transform">
                  Support
                </span>
              </li>
            </a>
          </nav>
        </div>
        <div className="flex flex-col justify-center items-start flex-1 px-12">
          <h1 className="text-5xl border-2 font-Josefin_Sans uppercase p-6 text-left tracking-wide md:text-8xl md:h-96 md:p-12 md:border-4">
            <span className="md:flex md:flex-col">Immersive</span> Experiences
            <span className="flex flex-col">That Deliver</span>
          </h1>
        </div>

        {/* Menu latéral */}
        <div
          className={`fixed inset-0 bg-black bg-opacity-90 flex flex-col text-left items-start transition-transform duration-1000 ease-in-out transform ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Logo en haut à gauche */}
          <div className="w-full flex justify-between items-center p-8">
            <a href="/">
              <img src={logo} alt="logo" />
            </a>

            {/* Icône de fermeture en haut à droite */}
            <img
              src={iconClose}
              alt="close icon"
              className="cursor-pointer w-8 h-8"
              onClick={() => setOpen(false)}
            />
          </div>

          <ul className="flex flex-col gap-5 text-white text-3xl pl-8 pt-40 uppercase">
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Careers</a>
            </li>
            <li>
              <a href="/">Events</a>
            </li>
            <li>
              <a href="/">Products</a>
            </li>
            <li>
              <a href="/">Support</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
