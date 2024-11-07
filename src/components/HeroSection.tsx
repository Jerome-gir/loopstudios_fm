import hero from "../assets/mobile/image-hero.jpg"
import HamburgerMenu from "../assets/icon-hamburger.svg"
import logo from "../assets/logo.svg"
import iconClose from "../assets/icon-close.svg"
import { useState } from "react"

export default function HeroSection() {
  const [open, setOpen] = useState(false)

  return (
    <section className="relative h-screen">
      <img
        src={hero}
        alt="Hero section"
        className="absolute inset-0 object-cover"
      />
      <div className="relative z-10 flex flex-col items-center h-full px-6 text-center text-white">
        <div className="absolute top-0 left-0 w-full p-12 flex justify-between items-center">
          <a href="/">
            <img src={logo} alt="logo" />
          </a>

          <img
            className={`${open ? "hidden" : "block cursor-pointer"}`}
            src={HamburgerMenu}
            width={24}
            height={16}
            alt="menu hamburger"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="flex flex-col justify-center items-start flex-1 px-6">
          <h1 className="text-6xl border-2 font-Josefin_Sans uppercase p-8 text-left tracking-wide">
            Immersive Experiences That{" "}
            <span className="flex flex-col">Deliver</span>
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
