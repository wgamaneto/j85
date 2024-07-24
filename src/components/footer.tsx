import { Typography } from "@material-tailwind/react";

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="px-8 pt-12 pb-8">
      <div className="container max-w-6xl flex flex-col mx-auto">
        <Typography
          color="blue-gray"
          className="md:text-center mt-16 font-normal !text-gray-700"
        >
          Av. das Nações, 883 - Parque Novo Oratório - Santo Andre/SP
          <br /> &copy; {CURRENT_YEAR} Washington Gama
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
