import vrImage from "../assets/mobile/image-interactive.jpg"
import deepEarth from "../assets/mobile/image-deep-earth.jpg"
import nightArcade from "../assets/mobile/image-night-arcade.jpg"
import soccerTeam from "../assets/mobile/image-soccer-team.jpg"
import gridImage from "../assets/mobile/image-grid.jpg"
import fromAbove from "../assets/mobile/image-from-above.jpg"
import pocketBorealis from "../assets/mobile/image-pocket-borealis.jpg"
import curiosity from "../assets/mobile/image-curiosity.jpg"
import fisheye from "../assets/mobile/image-fisheye.jpg"

export default function ContentSection() {
  return (
    <>
      <div className="flex flex-col items-center justify-center px-12 ">
        <img
          className="object-cover mb-16"
          src={vrImage}
          alt="personne avec un casque vr"
        />
        <h2 className="text-very_dark_gray uppercase text-4xl w-80 mb-12">
          the leader in interactive vr
        </h2>
        <p className="text-dark_gray  font-Josefin_Sans w-96 text-center text-md mb-24">
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand
        </p>
        <h2 className="text-very_dark_gray uppercase text-4xl w-80 mb-12">
          our creations
        </h2>
        <img
          className="object-cover mb-6 border"
          src={deepEarth}
          alt="galerie d'images"
        />
        <img
          className="object-cover mb-6 border"
          src={nightArcade}
          alt="galerie d'images"
        />
        <img
          className="object-cover mb-6 border"
          src={soccerTeam}
          alt="galerie d'images"
        />

        <img
          className="object-cover mb-6 border"
          src={gridImage}
          alt="galerie d'images"
        />
        <img
          className="object-cover mb-6 border"
          src={fromAbove}
          alt="galerie d'images"
        />
        <img
          className="object-cover mb-6 border"
          src={pocketBorealis}
          alt="galerie d'images"
        />
        <img
          className="object-cover mb-6 border"
          src={curiosity}
          alt="galerie d'images"
        />
        <img
          className="object-cover mb-12 border"
          src={fisheye}
          alt="galerie d'images"
        />
        <a href="/">
          <button className="uppercase text-xl border-2 px-12 py-3 mb-28 font-bold font-Alata tracking-widest w-64">
            see all
          </button>
        </a>
      </div>
    </>
  )
}
