"use client";
import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Trouvez le tabeau qu'il vous faut -- l'AI art vous rend fou !
        </h1>
        <p className="hero__subtitle">
          Loue une oeuvre d'art et recoit là sous 48 heures
        </p>

        <CustomButton
          btnType="button"
          title="Explore les oeuvres"
          //   containerStyles="bg-primary-blue text-white rounded-full mt-10"

          containerStyles="bg-pink text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            src="/imageHero.png"
            alt="hero"
            fill
            className="object-contain"
          />
          <div className="hero__image-overlay">
            <Image src="/pink.png" alt="hero" fill className="object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
