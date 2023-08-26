import Image from "next/image";
import React from "react";

type serviceCardType = {
  icon: string;
  title: string;
  description: string;
};

const ServiceCard = (card: serviceCardType) => {
  return (
    <div>
      <Image src={card.icon} alt="card icon" />
      <p>{card.title}</p>

      <span>{card.description}</span>
    </div>
  );
};

export default ServiceCard;
