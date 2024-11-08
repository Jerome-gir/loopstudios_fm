import deepEarth from "../assets/mobile/image-deep-earth.jpg"
import nightArcade from "../assets/mobile/image-night-arcade.jpg"
import soccerTeam from "../assets/mobile/image-soccer-team.jpg"
import gridImage from "../assets/mobile/image-grid.jpg"
import fromAbove from "../assets/mobile/image-from-above.jpg"
import pocketBorealis from "../assets/mobile/image-pocket-borealis.jpg"
import curiosity from "../assets/mobile/image-curiosity.jpg"
import fisheye from "../assets/mobile/image-fisheye.jpg"

import deepEarthDesktop from "../assets/desktop/image-deep-earth.jpg"
import nightArcadeDesktop from "../assets/desktop/image-night-arcade.jpg"
import soccerTeamDesktop from "../assets/desktop/image-soccer-team.jpg"
import gridImageDesktop from "../assets/desktop/image-grid.jpg"
import fromAboveDesktop from "../assets/desktop/image-from-above.jpg"
import pocketBorealisDesktop from "../assets/desktop/image-pocket-borealis.jpg"
import curiosityDesktop from "../assets/desktop/image-curiosity.jpg"
import fisheyeDesktop from "../assets/desktop/image-fisheye.jpg"

export default function CreationsSection() {
  return (
    <div className="md:px-12">
      <div className="flex flex-col items-center justify-center px-12 md:flex-row md:justify-between">
        <h2 className="text-very_dark_gray uppercase text-4xl w-80 mb-12 md:mb-28 md:text-4xl">
          our creations
        </h2>
        <a href="/">
          <button className="hidden md:block uppercase text-xl border-2 px-12 py-2 font-Alata tracking-widest mb-12 md:mb-28">
            see all
          </button>
        </a>
      </div>

      <div className="px-6 md:px-12 grid grid-cols-1 gap-6 md:grid-cols-4 md:grid-rows-2 md:mb-44">
        <img
          className="block md:hidden object-cover border cursor-pointer"
          src={deepEarth}
          alt="galerie d'images"
        />
        <img
          className="hidden md:block object-cover border cursor-pointer"
          src={deepEarthDesktop}
          alt="galerie d'images"
        />
        <img
          className="block md:hidden object-cover border cursor-pointer"
          src={nightArcade}
          alt="galerie d'images"
        />
        <img
          className="hidden md:block object-cover border cursor-pointer"
          src={nightArcadeDesktop}
          alt="galerie d'images"
        />
        <img
          className="block md:hidden object-cover border cursor-pointer"
          src={soccerTeam}
          alt="galerie d'images"
        />
        <img
          className="hidden md:block object-cover border cursor-pointer"
          src={soccerTeamDesktop}
          alt="galerie d'images"
        />
        <img
          className="block md:hidden object-cover border cursor-pointer"
          src={gridImage}
          alt="galerie d'images"
        />
        <img
          className="hidden md:block object-cover border cursor-pointer"
          src={gridImageDesktop}
          alt="galerie d'images"
        />
        <img
          className="block md:hidden object-cover border cursor-pointer"
          src={fromAbove}
          alt="galerie d'images"
        />
        <img
          className="hidden md:block object-cover border cursor-pointer"
          src={fromAboveDesktop}
          alt="galerie d'images"
        />
        <img
          className="block md:hidden object-cover border cursor-pointer"
          src={pocketBorealis}
          alt="galerie d'images"
        />
        <img
          className="hidden md:block object-cover border cursor-pointer"
          src={pocketBorealisDesktop}
          alt="galerie d'images"
        />
        <img
          className="block md:hidden object-cover border cursor-pointer"
          src={curiosity}
          alt="galerie d'images"
        />
        <img
          className="hidden md:block object-cover border cursor-pointer"
          src={curiosityDesktop}
          alt="galerie d'images"
        />
        <img
          className="block md:hidden object-cover mb-12 border cursor-pointer"
          src={fisheye}
          alt="galerie d'images"
        />
        <img
          className="hidden md:block object-cover border cursor-pointer"
          src={fisheyeDesktop}
          alt="galerie d'images"
        />
      </div>
      <div className="flex justify-center">
        <a href="/">
          <button className="md:hidden block uppercase text-xl border-2 px-12 py-3 mb-28 font-bold font-Alata tracking-widest w-64 cursor-pointer">
            see all
          </button>
        </a>
      </div>
    </div>
  )
}
