import React from 'react';
import {
  Navbar,
  MobileNav,
  Button,
  IconButton,
  Typography,
} from '@material-tailwind/react';
import {
  Bars3Icon,
  XMarkIcon,
  ArrowSmallRightIcon,
} from '@heroicons/react/24/outline';

import { FaWhatsapp } from 'react-icons/fa';

import Photo from '../../../../assets/ses_1.jpg';

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

  const openInstagramLink = () => {
    window.open('https://www.instagram.com/green_lushcorp/', '_blank');
  };

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setOpen(false),
    );
  }, []);

  return (
    <>
      <Navbar
        className="fixed z-50 border-x-0 border-t-0 !border-b border-lush-beige bg-lush-beige/80"
        shadow={false}
        fullWidth
      >
        <div className="container mx-auto flex items-center">
          <Typography color="blue-gray" className="!mb-0 !font-bold">
            {name}
          </Typography>

          <div className="ml-auto hidden gap-2 lg:flex">
            <div className="flex flex-wrap justify-center gap-2">
              <button
                onClick={openInstagramLink}
                className="p-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
                style={{ backgroundColor: '#c13584' }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </button>
            </div>
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
            <div className="mt-8 mb-4 flex align-center justify-center">
              <div className="flex flex-wrap justify-center gap-2">
                <button
                  className="p-2 font-semibold text-white inline-flex items-center space-x-2 rounded"
                  style={{ backgroundColor: '#c13584' }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </MobileNav>
      </Navbar>
      <header
        className="h-2/3 min-h-2/3 w-screen place-items-cente px-8 py-40 "
        style={{ backgroundColor: '#d5bdaf' }}
      >
        <div className="container mx-auto grid items-center lg:grid-cols-2">
          <div className="text-center lg:text-left">
            <Typography
              variant="h1"
              className="mb-8 leading-tight lg:text-6xl text-lush-green"
            >
              {call}
            </Typography>
            <Typography variant="lead" className="lg:pr-20 text-lush-black">
              {description}
            </Typography>
          </div>
          <div className="hidden justify-end lg:flex">
            <img src={Photo} alt="iphone" className="w-3/4 rounded-lg" />
          </div>
        </div>
      </header>
    </>
  );
}

export { Header };
