import React from "react";
import Image from "next/image";
import Arrow from "../assets/arrow-down.svg";

type Props = {
  name: string;
};

const ItemMenu = ({ name }: Props) => {
  return (
    <button className="flex items-center gap-1 hover:opacity-90 transition">
      <span className="text-white text-sm font-semibold">{name}</span>
      <Image src={Arrow} alt="seta menu" className="w-3 h-3" />
    </button>
  );
};

export default ItemMenu;
