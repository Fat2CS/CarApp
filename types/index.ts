import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
}
export interface CustomFilterProps {
  title: string;
}

export interface SearchStylesArtProps {
  stylesArt: string;
  setStylesArt: (stylesArt: string) => void;
}

export interface ImageProps {
  id: number;
  smallImage: string;

  bigImage: string;

  prompt: string;

  prompt_full: string;

  created_at: string;

  score: null;
  time: number;

  aspect: string;
}
