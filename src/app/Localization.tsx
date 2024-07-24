"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";

function TrustedCompany() {
  return (
    <section className="py-8 px-8 lg:py-20">
      <div className="container mx-auto grid items-center place-items-center">
        <div className="mt-16 text-center">
          <Typography variant="h6" className="mb-4 uppercase !text-gray-500">
            Nossa localizacao
          </Typography>
          <Typography variant="h4" color="blue-gray" className="mb-12">
            Nos encontre no Google Maps
          </Typography>
          <div className="relative w-full h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.151602194473!2d-46.502753999999996!3d-23.6347412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce681613bcc23f%3A0xe5a4e9e5e8b01f58!2sAv.%20das%20Na%C3%A7%C3%B5es%2C%20883%20-%20Parque%20Novo%20Orat%C3%B3rio%2C%20Santo%20Andr%C3%A9%20-%20SP%2C%2009260-000!5e0!3m2!1sen!2sbr!4v1721844335621!5m2!1sen!2sbr"
              width="780px"
              height="120%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TrustedCompany;
