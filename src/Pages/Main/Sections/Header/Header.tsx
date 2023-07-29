import React from "react";
import {
  Navbar,
  MobileNav,
  Button,
  IconButton,
  Typography,
} from "@material-tailwind/react";
import {
  Bars3Icon,
  XMarkIcon,
  ArrowSmallRightIcon,
} from "@heroicons/react/24/outline";

import { FaWhatsapp } from "react-icons/fa";

interface NavItemPropsType {
  children: React.ReactNode;
}

interface IFirstSectionProps {
  call: string | undefined;
  description?: string | undefined;
  photoBase64?: string | undefined;
  src?: any;
  onClick?: any;
  mainColor?: string | undefined;
  secondaryColor?: string | undefined;
  coverKeyWords?: string;
  isFirstPhotoHidden?: string | undefined;
  firstButtonText?: string | undefined;
  isVideo?: string;
  name: string | undefined;
}

function NavItem({ children }: NavItemPropsType) {
  return (
    <li>
      <Typography
        as="a"
        href="#"
        variant="small"
        color="gray"
        className="font-normal transition-colors hover:text-gray-900"
      >
        {children}
      </Typography>
    </li>
  );
}

function Header({
  mainColor,
  secondaryColor,
  name,
  isVideo,
  call,
  description,
  photoBase64,
  firstButtonText,
  src,
  onClick,
  coverKeyWords,
  isFirstPhotoHidden,
}: IFirstSectionProps) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false),
    );
  }, []);

  return (
    <>
      <Navbar
        className="fixed z-50 border-x-0 border-t-0 !border-b !border-blue-gray-50"
        shadow={false}
        fullWidth
      >
        <div className="container mx-auto flex items-center">
          <Typography color="blue-gray" className="!mb-0 !font-bold">
            {name}
          </Typography>
          <ul className="ml-10 hidden items-center gap-6 lg:flex">
            <NavItem>Home</NavItem>
            <NavItem>About</NavItem>
            <NavItem>Resources</NavItem>
            <NavItem>Pricing</NavItem>
          </ul>
          <div className="ml-auto hidden gap-2 lg:flex">
            <Button variant="text" size="sm">
              login
            </Button>
            <Button size="sm">sign up</Button>
          </div>
          <IconButton
            size="sm"
            variant="text"
            color="blue-gray"
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
        <MobileNav open={open}>
          <div className="container mx-auto mt-3 border-t border-blue-gray-50 px-2 pt-4">
            <ul className="flex flex-col gap-4">
              <NavItem>Home</NavItem>
              <NavItem>About</NavItem>
              <NavItem>Resources</NavItem>
              <NavItem>Pricing</NavItem>
            </ul>
            <div className="mt-8 mb-4 flex gap-2">
              <Button variant="outlined" size="sm" fullWidth>
                login
              </Button>
              <Button size="sm" fullWidth>
                sign up
              </Button>
            </div>
          </div>
        </MobileNav>
      </Navbar>
      <header className="h-2/3 min-h-2/3 w-screen place-items-center bg-white px-8 py-40">
        <div className="container mx-auto grid items-center lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <Typography
              variant="h1"
              color="blue-gray"
              className="mb-8 leading-tight lg:text-6xl"
            >
              {call}
            </Typography>
            <Typography variant="lead" color="gray" className="lg:pr-20">
              {description}
            </Typography>
            <div className="mt-12 flex flex-wrap justify-center gap-3 lg:justify-start">
              <Button size="lg" className="flex items-center">
                <i className="-mt-1 mr-1.5 h-6 w-6">
                  <FaWhatsapp style={{ height: "100%", width: "100%" }} />
                </i>
                Vamos conversar!
              </Button>
            </div>
          </div>
          <div className="hidden justify-end lg:flex">
            <img src={photoBase64} alt="iphone" className="w-3/5 rounded-lg" />
          </div>
        </div>
      </header>
    </>
  );
}

export { Header };
