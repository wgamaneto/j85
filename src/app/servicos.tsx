"use client";

import Image from "next/image";
import { Typography, Card, CardBody } from "@material-tailwind/react";

const CardSection = ({ isImageFirst, imageSrc, title, description, items }) => (
  <CardBody className="col-span-full gap-1 place-items-center overflow-visible grid grid-cols-1 lg:grid-cols-4">
    {isImageFirst && (
      <div className="h-[400px] xl:w-[600px] flex items-center overflow-hidden rounded-xl justify-center col-span-2 h-full">
        <Image
          width={300}
          height={300}
          src={imageSrc}
          alt="testimonial image"
          className="w-full h-full scale-110 object-cover"
        />
      </div>
    )}
    <div className="col-span-2 w-full">
      <Typography variant="h2" color="blue-gray" className="mb-4 font-bold">
        {title}
      </Typography>
      <Typography className="mb-1 w-full font-large !text-gray-500">
        {description}
      </Typography>
      <div className="grid mb-4">
        {items.map((item, index) => (
          <div key={index} className="flex items-center gap-1">
            <span className="h-1 w-1 bg-gray-500 rounded-full" />
            <Typography className="w-full font-large !text-gray-500">
              {item}
            </Typography>
          </div>
        ))}
      </div>
    </div>
    {!isImageFirst && (
      <div className="h-[400px] xl:w-[600px] flex items-center overflow-hidden rounded-xl justify-center col-span-2 h-full">
        <Image
          width={300}
          height={300}
          src={imageSrc}
          alt="testimonial image"
          className="w-full h-full scale-110 object-cover"
        />
      </div>
    )}
  </CardBody>
);

function TESTIMONIAL() {
  const sections = [
    {
      isImageFirst: true,
      imageSrc: "/image/imagem1.jpg",
      title: "LAVAGEM DETALHADA",
      description: "Atenção aos detalhes para um resultado impecável.",
      items: [
        "International course collection in 10 languages",
        "Certified include",
      ],
    },
    {
      isImageFirst: false,
      imageSrc: "/image/higienizacao.jpg",
      title: "HIGIENIZAÇÃO COMPLETA",
      description: "Higiene total com produtos especializados.",
      items: ["React, Angular, Vue", "Advanced CSS and JavaScript"],
    },
    {
      isImageFirst: true,
      imageSrc: "/image/polimento.jpg",
      title: "POLIMENTO",
      description: "polimento com técnica avançada.",
      items: ["Node.js, Express", "Database Management"],
    },
  ];

  return (
    <section className="px-8 py-40">
      <div className="container mx-auto">
        <Card color="transparent" shadow={false} className="">
          {sections.map((section, index) => (
            <CardSection key={index} {...section} />
          ))}
        </Card>
      </div>
    </section>
  );
}

export default TESTIMONIAL;
