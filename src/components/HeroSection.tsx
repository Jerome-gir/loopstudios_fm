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
        className="absolute inset-0 object-cover sm:hidden"
      />
      <img
        src={HeroDesktopImage}
        alt="Hero section"
        className="absolute inset-0 object-cover w-full hidden sm:block"
      />
      <div className="relative z-10 flex flex-col items-center h-full px-6 text-center text-white sm:items-start sm:px-20">
        <div className="absolute top-0 left-0 w-full p-8 flex justify-between items-center sm:p-32">
          <a href="/">
            <img className="sm:w-80" src={logo} alt="logo" />
          </a>
          <img
            className={`sm:hidden ${open ? "hidden" : "block cursor-pointer"}`}
            src={HamburgerMenu}
            width={24}
            height={16}
            alt="menu hamburger"
            onClick={() => setOpen(!open)}
          />
          <ul className="hidden sm:flex gap-10 text-xl font-Alata">
            <a href="/">
              <li>About</li>
            </a>
            <a href="/">
              <li>Careers</li>
            </a>
            <a href="/">
              <li>Events</li>
            </a>
            <a href="/">
              <li>Products</li>
            </a>
            <a href="/">
              <li>Support</li>
            </a>
          </ul>
        </div>
        <div className="flex flex-col justify-center items-start flex-1 px-12">
          <h1 className="text-5xl border-2 font-Josefin_Sans uppercase p-6 text-left tracking-wide sm:text-8xl sm:h-96 sm:p-12 sm:border-4">
            <span className="sm:flex sm:flex-col">Immersive</span> Experiences
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
