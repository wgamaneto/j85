import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";
import Image from "next/image";

import logo from "../assets/images/j85logo.png";
import facebook from "../assets/images/icons8-facebook-96.png";
import instagram from "../assets/images/icons8-instagram-96.png";
import tiktok from "../assets/images/icons8-tiktok-96.png";
import whatsapp from "../assets/images/icons8-whatsapp-96.png";

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <Typography
        as="a"
        href={href || "#"}
        target={href ? "_blank" : "_self"}
        variant="paragraph"
        color="gray"
        className="flex items-center gap-2 font-medium text-gray-900"
      >
        {children}
      </Typography>
    </li>
  );
}

export function Navbar() {
  const [open, setOpen] = React.useState(false);

  function handleOpen() {
    setOpen((cur) => !cur);
  }

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  return (
    <div className="px-10 sticky top-4 z-50">
      <div className="mx-auto container">
        <MTNavbar
          blurred
          color="white"
          className="z-50 mt-6 relative border-0 pr-3 py-3 pl-6"
        >
          <div className="h-[60px] flex items-center justify-around">
            <Image
              src={logo}
              alt="WhatsApp"
              width={120}
              height={120}
              className="h-[140px] xl:w-[140px] flex items-center overflow-show rounded-xl justify-center col-span-2 h-full"
            />
            <Typography
              color="blue-gray"
              className="text-lg font-bold"
            ></Typography>
            <div className="hidden items-center gap-4 lg:flex">
              <Button variant="text">Inicio</Button>
              <Button variant="text">Servicos</Button>
              <Button variant="text">Higienizacao interna</Button>
              <Button variant="text">Sobre nos</Button>
            </div>
            <ul className="ml-10 hidden items-center gap-8 lg:flex">
              <NavItem href="#">
                <Image src={facebook} alt="Facebook" width={30} height={30} />
              </NavItem>
              <NavItem href="#">
                <Image src={instagram} alt="Instagram" width={30} height={30} />
              </NavItem>
              <NavItem href="#">
                <Image src={tiktok} alt="TikTok" width={30} height={30} />
              </NavItem>
              <NavItem href="#">
                <Image src={whatsapp} alt="WhatsApp" width={30} height={30} />
              </NavItem>
            </ul>
            <IconButton
              variant="text"
              color="gray"
              onClick={handleOpen}
              className="ml-auto inline-block lg:hidden"
            >
              {open ? (
                <XMarkIcon strokeWidth={2} className="h-6 w-6" />
              ) : (
                <Bars3Icon strokeWidth={2} className="h-6 w-6" />
              )}
            </IconButton>
          </div>
          <Collapse open={open}>
            <div className="container mx-auto mt-3 border-t border-gray-200 px-2 pt-4">
              <ul className="flex flex-col gap-4"></ul>
              <div className="mt-6 mb-4 flex items-center gap-4">
                <Button variant="text">Log in</Button>
                <a
                  href="https://www.material-tailwind.com/blocks"
                  target="_blank"
                >
                  <Button color="gray">blocks</Button>
                </a>
              </div>
            </div>
          </Collapse>
        </MTNavbar>
      </div>
    </div>
  );
}

export default Navbar;
