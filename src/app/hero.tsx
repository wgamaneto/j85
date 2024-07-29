// @ts-nocheck
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button, Typography, Card } from "@material-tailwind/react";

import imagem1 from "../assets/images/imagem2.jpg";

function Hero() {
  return (
    <div className="!flex h-[55vh] w-full items-center justify-between px-10">
      <Image
        width={1200}
        height={1200}
        src={imagem1}
        alt="bg-img"
        className="absolute inset-0 ml-auto w-[920px] h-[780px] rounded-bl-[100px] object-cover object-center"
      />
      <div className="container mx-auto mt-28">
        <div className="grid grid-cols-12 text-center lg:text-left">
          <Card className="col-span-full rounded-xl border border-white bg-white/90 py-10 p-8 shadow-lg shadow-black/10 backdrop-blur-sm backdrop-saturate-200 xl:col-span-7">
            <Typography
              variant="h1"
              color="blue-gray"
              className="lg:text-5xl !leading-snug text-3xl lg:max-w-3xl"
            >
              ESTÉTICA AUTOMOTIVA
            </Typography>
            <Typography variant="lead" className="mb-10 mt-6 !text-gray-900">
              A adoção de técnicas que vão desde limpeza do veículo, serviços de
              recuperação de pintura e peças desgastadas, até detalhes e
              personalização do seu carro.
            </Typography>
            <div className="mb-8 flex justify-center gap-4 lg:justify-start">
              <Link href="/contato" passHref>
                <Button color="gray">Entre em contato</Button>
              </Link>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
export default Hero;
