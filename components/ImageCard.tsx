"use client";

import { useState } from "react";
import Image from "next/image";
// on cree le types de l'image
import { ImageProps } from "@/types";

// interface de la card
interface ImageCardProps {
  image: ImageProps;
}
const ImageCard = ({ image }: ImageCardProps) => {
  const { id, smallImage, bigImage, prompt, prompt_full, created_at, aspect } =
    image;

  const firstWord = prompt?.split(" ").slice(0, 2).join(" ");
  return (
    <div className="car-card__group">
      <div className="car-car__content mt-25 mb-60">
        <h2 className="car-card__content-title">{firstWord}</h2>

        <div className="relative w-full h-60 my-3 object-contain content-center">
          <image
            src={smallImage}
            width={200}
            height={200}
            alt="les belles images"
          />
        </div>
        <div className="relative flex w-full mt-2">
          <div className="flex group-hover:invisible w-full justify-between text-grey">
            <div className="flex flex-col justify-center items-center gap-2">
              <Image
                src="/steering-wheel.svg"
                width={20}
                height={20}
                alt="steering wheel"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
