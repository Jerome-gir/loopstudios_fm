import facebookIcon from "../assets/icon-facebook.svg"
import twitterIcon from "../assets/icon-twitter.svg"
import pinterestIcon from "../assets/icon-pinterest.svg"
import instagramIcon from "../assets/icon-instagram.svg"

export default function Footer() {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-around items-center justify-center bg-black text-white font-Josefin_Sans">
      <div>
        <h3 className="text-5xl font-bold py-16 sm:py-10">loopstudios</h3>
        <ul className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-10 text-2xl pb-12">
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
      <div>
        <ul className="flex justify-center sm:justify-end items-center gap-5 pb-4 sm:pb-6">
          <a href="/">
            <img className="size-8" src={facebookIcon} alt="icon facebook" />
          </a>
          <a href="/">
            <img className="size-8" src={twitterIcon} alt="icon facebook" />
          </a>
          <a href="/">
            <img className="size-8" src={pinterestIcon} alt="icon facebook" />
          </a>
          <a href="/">
            <img className="size-8" src={instagramIcon} alt="icon facebook" />
          </a>
        </ul>
        <p className="pt-3 pb-6 sm:pb-0 text-dark_gray text-xl sm:text-2xl">
          © 2021 Loopstudios. All rights reserved.
        </p>
      </div>
    </div>
  )
}
