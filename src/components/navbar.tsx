// @ts-nocheck
import React from "react";
import {
  Navbar as MTNavbar,
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
    setOpen((prev) => !prev);
  }

  function scrollToElement(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function scrollToBottom() {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }

  React.useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="px-4 lg:px-10 sticky top-4 z-50">
      <div className="container mx-auto relative">
        <MTNavbar
          blurred
          color="white"
          className="relative border-0 pr-3 py-3 pl-6 z-10"
        >
          <div className="flex items-center justify-between h-[60px]">
            <Image
              src={logo}
              alt="J85 Logo"
              width={120}
              height={120}
              className="h-[140px] xl:w-[140px] rounded-xl z-20"
            />
            <div className="hidden lg:flex items-center gap-3">
              <Button variant="text" onClick={scrollToTop}>
                Inicio
              </Button>
              <Button
                variant="text"
                onClick={() => scrollToElement("servicos")}
              >
                Servicos
              </Button>
              <Button
                variant="text"
                onClick={() => scrollToElement("feedback")}
              >
                Clientes
              </Button>
              <Button variant="text" onClick={scrollToBottom}>
                Localização
              </Button>
              <div className="flex gap-6 ml-8">
                <NavItem href="https://www.facebook.com/profile.php?id=61550896696717&mibextid=ZbWKwL">
                  <Image src={facebook} alt="Facebook" width={30} height={30} />
                </NavItem>
                <NavItem href="https://www.instagram.com/garagem_j85?igsh=MXM0azVwemFuY2c4NA==">
                  <Image
                    src={instagram}
                    alt="Instagram"
                    width={30}
                    height={30}
                  />
                </NavItem>
                <NavItem href="https://www.tiktok.com/@garagem_j85?_t=8oQVWPaavm1&_r=1">
                  <Image src={tiktok} alt="TikTok" width={30} height={30} />
                </NavItem>
                <NavItem href="https://wa.me/message/47DEWPGQMSAWH1">
                  <Image src={whatsapp} alt="WhatsApp" width={30} height={30} />
                </NavItem>
              </div>
            </div>
            <IconButton
              variant="text"
              color="gray"
              onClick={handleOpen}
              className="lg:hidden z-30"
              aria-label="Toggle navigation"
            >
              {open ? (
                <XMarkIcon strokeWidth={1} className="h-6 w-6" />
              ) : (
                <Bars3Icon strokeWidth={1} className="h-6 w-6" />
              )}
            </IconButton>
          </div>
          {open && (
            <div className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-lg p-4 z-0">
              <ul className="flex flex-col items-center gap-4">
                <Button onClick={() => scrollToTop()}>Inicio</Button>
                <Button onClick={() => scrollToElement("servicos")}>
                  Servicos
                </Button>
                <Button onClick={() => scrollToElement("feedback")}>
                  Clientes
                </Button>
                <Button onClick={() => scrollToBottom()}>Localização</Button>
                <div className="flex gap-4 mt-4">
                  <NavItem href="https://www.facebook.com/profile.php?id=61550896696717&mibextid=ZbWKwL">
                    <Image
                      src={facebook}
                      alt="Facebook"
                      width={30}
                      height={30}
                    />
                  </NavItem>
                  <NavItem href="https://www.instagram.com/garagem_j85?igsh=MXM0azVwemFuY2c4NA==">
                    <Image
                      src={instagram}
                      alt="Instagram"
                      width={30}
                      height={30}
                    />
                  </NavItem>
                  <NavItem href="https://www.tiktok.com/@garagem_j85?_t=8oQVWPaavm1&_r=1">
                    <Image src={tiktok} alt="TikTok" width={30} height={30} />
                  </NavItem>
                  <NavItem href="https://wa.me/message/47DEWPGQMSAWH1">
                    <Image
                      src={whatsapp}
                      alt="WhatsApp"
                      width={30}
                      height={30}
                    />
                  </NavItem>
                </div>
              </ul>
            </div>
          )}
        </MTNavbar>
      </div>
    </div>
  );
}

export default Navbar;
