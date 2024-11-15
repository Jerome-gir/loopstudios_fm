import facebookIcon from "../assets/icon-facebook.svg"
import twitterIcon from "../assets/icon-twitter.svg"
import pinterestIcon from "../assets/icon-pinterest.svg"
import instagramIcon from "../assets/icon-instagram.svg"

export default function Footer() {
  return (
    <div className="flex flex-col md:flex-row md:justify-around items-center justify-center bg-black text-white font-Josefin_Sans">
      <div>
        <h3 className="text-5xl font-bold py-16 md:py-10">loopstudios</h3>
        <nav className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-10 text-2xl pb-12 list-none">
          <li className="relative group cursor-pointer">
            <span className="group-hover:before:scale-x-100 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-full before:h-[2px] before:bg-white before:scale-x-0 before:origin-left before:transition-transform">
              About
            </span>
          </li>
          <li className="relative group cursor-pointer">
            <span className="group-hover:before:scale-x-100 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-full before:h-[2px] before:bg-white before:scale-x-0 before:origin-left before:transition-transform">
              Careers
            </span>
          </li>
          <li className="relative group cursor-pointer">
            <span className="group-hover:before:scale-x-100 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-full before:h-[2px] before:bg-white before:scale-x-0 before:origin-left before:transition-transform">
              Events
            </span>
          </li>
          <li className="relative group cursor-pointer">
            <span className="group-hover:before:scale-x-100 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-full before:h-[2px] before:bg-white before:scale-x-0 before:origin-left before:transition-transform">
              Products
            </span>
          </li>
          <li className="relative group cursor-pointer">
            <span className="group-hover:before:scale-x-100 before:content-[''] before:absolute before:-bottom-2 before:left-0 before:w-full before:h-[2px] before:bg-white before:scale-x-0 before:origin-left before:transition-transform">
              Support
            </span>
          </li>
        </nav>
      </div>
      <div>
        <ul className="flex justify-center md:justify-end items-center gap-5 pb-4 md:pb-6">
          <a href="/" className="group relative">
            <img className="size-8" src={facebookIcon} alt="icon facebook" />
            <span className="absolute left-0 right-0 -bottom-2 h-1 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
          </a>
          <a href="/" className="group relative">
            <img className="size-8" src={twitterIcon} alt="icon facebook" />
            <span className="absolute left-0 right-0 -bottom-2 h-1 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
          </a>
          <a href="/" className="group relative">
            <img className="size-8" src={pinterestIcon} alt="icon facebook" />
            <span className="absolute left-0 right-0 -bottom-2 h-1 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
          </a>
          <a href="/" className="group relative">
            <img className="size-8" src={instagramIcon} alt="icon facebook" />
            <span className="absolute left-0 right-0 -bottom-2 h-1 bg-white scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center"></span>
          </a>
        </ul>
        <p className="pt-3 pb-6 md:pb-0 text-dark_gray text-xl md:text-2xl">
          © 2021 Loopstudios. All rights reserved.
        </p>
      </div>
    </div>
  )
}
