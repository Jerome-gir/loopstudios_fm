import facebookIcon from "../assets/icon-facebook.svg"
import twitterIcon from "../assets/icon-twitter.svg"
import pinterestIcon from "../assets/icon-pinterest.svg"
import instagramIcon from "../assets/icon-instagram.svg"

export default function Footer() {
  return (
    <div className="flex flex-col items-center justify-center bg-black text-white font-Josefin_Sans ">
      <h3 className="text-5xl font-bold py-16">loopstudios</h3>
      <ul className="flex flex-col justify-center items-center gap-4 text-2xl pb-12">
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
      <ul className="flex justify-center items-center gap-5 pb-4">
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
      <p className="pt-3 pb-6 text-dark_gray text-xl">
        © 2021 Loopstudios. All rights reserved.
      </p>
    </div>
  )
}
