import React from "react";

interface ButtonProps {
  id: number;
  text: string;
  link: string;
  type: string;
}

const SliderButtons: React.FC<{ buttons: ButtonProps[] }> = ({ buttons }) => {
  return buttons.map(({ id, link, text }) => (
    <a target="_blank" key={id} href={link}>
      <span>{text}</span>
    </a>
  ));
};

export default SliderButtons;
