import React from 'react';
import { Typography, Button } from '@material-tailwind/react';
import { BoltIcon } from '@heroicons/react/24/outline';

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
    <section className="px-4 py-12">
      <div className="container mx-auto">
        <div className="mb-20 grid lg:grid-cols-2">
          <div className="lg:pr-10">
            <img
              src="https://images.unsplash.com/photo-1534120247760-c44c3e4a62f1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2996&q=80"
              alt="background image"
              className="h-full min-h-[20rem] w-full rounded-xl object-cover"
            />
          </div>
          <div className="grid items-center py-12 px-2 lg:ml-8 lg:py-20">
            <Icon>
              <BoltIcon className="h-6 w-6" strokeWidth={2} />
            </Icon>
            <Typography variant="h3" color="blue-gray" className="mb-2">
              {secondTitle == '' || secondTitle == null ? (
                <>O que ofereço</>
              ) : (
                <>{secondTitle}</>
              )}
            </Typography>
            <Typography
              color="blue-gray"
              variant="lead"
              className="mb-10 font-normal text-gray-700"
            >
              {products}
            </Typography>
            <div className="flex gap-2">
              <Button size="lg">Contrate um orçamento</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export { SecondSection };
