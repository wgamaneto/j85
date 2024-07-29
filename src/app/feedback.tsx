// @ts-nocheck
import React from "react";
import FeedbackCard from "@/components/feedback-card";
import { Typography } from "@material-tailwind/react";

const FEEDBACKS = [
  {
    feedback:
      "Resultado Maravilhoso! Não poderia estar mais satisfeito com o serviço de estética automotiva que recebi. A atenção aos detalhes e o uso de produtos de alta qualidade fizeram toda a diferença.",
    client: "Liz Matos",
    img: "/image/avatar1.jpg",
  },
  {
    feedback:
      "Excelente Atendimento! Fiquei impressionado com a eficiência e a dedicação do time. Desde o polimento até a higienização interna, tudo foi feito com muita precisão e cuidado. Meu carro parece novo de novo!",
    client: "Washington Gama",
    img: "/image/avatar3.jpg",
  },
  {
    feedback:
      "Serviço Impecável! Meu carro nunca esteve tão brilhante e bem cuidado. A equipe foi extremamente profissional e atenciosa aos detalhes. Recomendo fortemente para quem busca um serviço de alta qualidade.",
    client: "Amanda Zanata",
    img: "/image/avatar2.jpg",
  },
];

export function StudentsFeedback() {
  return (
    <section id="feedback" className="px-8">
      <div className="container mx-auto">
        <div className="mb-16 flex flex-col items-center w-full">
          <Typography variant="h2" color="blue-gray" className="mb-2">
            O que nossos clientes estao comentando.
          </Typography>
          <Typography
            variant="lead"
            className="mb-10 max-w-3xl lg:text-center !text-gray-500"
          >
            Trabalhamos para entregar um servico de alta qualidade e um
            atendimento impar para fidelizar todos os nossos clientes.
          </Typography>
        </div>
        <div className="grid gap-x-8 gap-y-12 lg:px-32 grid-cols-1 md:grid-cols-3">
          {FEEDBACKS.map((props, key) => (
            <FeedbackCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default StudentsFeedback;
