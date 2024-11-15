import vrImage from "../assets/mobile/image-interactive.jpg"
import CreationsSection from "./CreationsSection"

export default function ContentSection() {
  return (
    <div className="md:flex md:justify-center">
      <div className="flex flex-col items-center justify-center px-12 md:items-start">
        <div className="md:relative">
          <img
            className="object-cover mb-16"
            src={vrImage}
            alt="personne avec un casque vr"
          />
          <div className="md:absolute md:bg-white md:w-full md:h-82 md:-bottom-10 md:left-96 md:ml-32 md:pl-20 md:pt-16">
            <h2 className="text-very_dark_gray text-center md:text-left uppercase text-4xl w-80 mb-12 md:mb-8">
              the leader in interactive vr
            </h2>
            <p className="text-dark_gray font-Josefin_Sans w-96 text-center mb-24 md:text-left">
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </p>
          </div>
        </div>
        <CreationsSection />
      </div>
    </div>
  )
}
