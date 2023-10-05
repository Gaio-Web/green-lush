import React from 'react';
import { Typography, Button } from '@material-tailwind/react';
import { BoltIcon } from '@heroicons/react/24/outline';
import CardThree from '../../../Components/CardsSmall/Cards';

interface IconPropsType {
  children: React.ReactNode;
}

interface ISecondSectionProp {
  photoBase64?: string | undefined;
  products?: string | undefined;
  src?: any;
  onClick?: any;
  isAutonomous?: any;
  mainColor?: string | undefined;
  accentColor?: string | undefined;
  coverKeyWords?: string | undefined;
  secondTitle?: string | undefined;
  secondButtonText?: string | undefined;
}

function Icon({ children }: IconPropsType) {
  return (
    <div className="mb-6 grid h-12 w-12 place-items-center rounded-full bg-blue-100/80 p-2.5 text-blue-500 ring-8 ring-blue-100/40">
      {children}
    </div>
  );
}

function SecondSection({
  mainColor,
  accentColor,
  isAutonomous,
  secondButtonText,
  photoBase64,
  products,
  src,
  onClick,
  coverKeyWords,
  secondTitle,
}: ISecondSectionProp) {
  return (
    <section className="px-4 bg-lush-beige">
      <div className="container mx-auto">
        <div className="grid items-center py-12 px-2 lg:ml-8 lg:py-20 gap-5">
          <Typography variant="h3" color="blue-gray" className="mb-2">
            {secondTitle == '' || secondTitle == null ? (
              <>O que ofereço</>
            ) : (
              <>{secondTitle}</>
            )}
          </Typography>
          <CardThree
            title="Design & Planning"
            text="We work with you to design the perfect outdoor space, tailored to your specific needs"
          />
          <CardThree
            title="Hardscaping"
            text="From patios to retaining walls, we can build the durable features that will take your outdoor space to the next level"
          />
          <CardThree
            title="Lawn & Garden Care"
            text="We provide full-service lawn care and garden maintenance so that your outdoor space stays lush and beautiful all year long."
          />
          <CardThree
            title="Irrigation & Drainage"
            text="We can help you conserve water and keep your outdoor space healthy and welldrained with our irrigation and drainage systems."
          />
        </div>
      </div>
    </section>
  );
}

export { SecondSection };
