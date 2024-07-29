// @ts-nocheck
"use client";

import Image from "next/image";
import PropTypes from "prop-types";
import { Typography, Card, CardBody } from "@material-tailwind/react";

const CardSection = ({ isImageFirst, imageSrc, title, description, index }) => {
  const isObjectTop = index === 0 || imageSrc === "/image/polimentoLata.jpg";

  return (
    <CardBody className="col-span-full gap-1 place-items-center overflow-visible grid grid-cols-1 lg:grid-cols-4">
      {isImageFirst && (
        <div
          className={`h-[400px] xl:w-[624px] flex items-start overflow-hidden rounded-xl justify-right col-span-2 ${
            index === 0 ? "mt-4" : ""
          }`}
        >
          <Image
            width={624}
            height={400}
            src={imageSrc}
            alt={title}
            className={`w-full h-full scale-80 object-cover transition-transform duration-300 hover:scale-125 ${
              isObjectTop ? "object-top" : ""
            }`}
          />
        </div>
      )}
      <div className="col-span-2 w-full text-center">
        <Typography variant="h2" color="blue-gray" className="mb-4 font-bold">
          {title}
        </Typography>
        <Typography className="mb-1 w-full font-large !text-gray-500">
          {description}
        </Typography>
      </div>
      {!isImageFirst && (
        <div className="h-[400px] xl:w-[624px] flex items-center overflow-hidden rounded-xl justify-center col-span-2">
          <Image
            width={624}
            height={400}
            src={imageSrc}
            alt={title}
            className={`w-full h-full scale-80 object-cover transition-transform duration-300 hover:scale-125 ${
              isObjectTop ? "object-top" : ""
            }`}
          />
        </div>
      )}
    </CardBody>
  );
};

CardSection.propTypes = {
  isImageFirst: PropTypes.bool.isRequired,
  imageSrc: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

function Services() {
  const sections = [
    {
      isImageFirst: true,
      imageSrc: "/image/img1.jpg",
      title: "LAVAGEM DETALHADA",
      description:
        "Nossa lavagem detalhada se destaca pela atenção meticulosa aos detalhes, garantindo que cada canto do seu veículo receba o cuidado necessário para um resultado final impecável. Utilizamos técnicas avançadas e produtos de alta qualidade para proporcionar uma limpeza profunda.",
    },
    {
      isImageFirst: false,
      imageSrc: "/image/higienizacao.jpg",
      title: "HIGIENIZAÇÃO COMPLETA",
      description:
        "A higienização completa é realizada com produtos especializados que removem sujeiras e contaminantes de maneira eficaz. Nosso processo garante que todas as superfícies sejam devidamente desinfetadas, proporcionando um ambiente limpo e saudável.",
    },
    {
      isImageFirst: true,
      imageSrc: "/image/polimentoLata.jpg",
      title: "POLIMENTO DE LATARIA",
      description:
        "O polimento é realizado utilizando formas profissionais que visam a remoção de imperfeições e a restauração do brilho original da pintura. Com nossa abordagem especializada, seu veículo terá uma aparência renovada, com um acabamento brilhante e livre de riscos e marcas indesejadas.",
    },
    {
      isImageFirst: false,
      imageSrc: "/image/polimento.jpg",
      title: "POLIMENTO DE FAROIS",
      description:
        "O polimento de faróis é um serviço essencial para restaurar a clareza e a eficácia dos faróis do seu veículo. Com o tempo, os faróis podem ficar opacos e amarelados devido à exposição a elementos externos e à oxidação. Nosso processo utiliza técnicas e produtos especializados para remover camadas de sujeira e desgaste, restaurando a transparência e a intensidade da luz.",
    },
  ];

  return (
    <section className="px-8 py-40">
      <div id="servicos" className="container mx-auto">
        <Card color="transparent" shadow={false}>
          {sections.map((section, index) => (
            <CardSection key={index} index={index} {...section} />
          ))}
        </Card>
      </div>
    </section>
  );
}

export default Services;
