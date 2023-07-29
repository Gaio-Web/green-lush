import React from "react";
import { Card, CardBody, Typography } from "@material-tailwind/react";
import {
  EyeIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  BoltIcon,
  FaceSmileIcon,
  LinkIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}

interface IThirdSectionProp {
    mainColor?: string | undefined | null;
    secondaryColor?: string | undefined | null;
    accentColor?: string | undefined | null;
    onClick?: any;
    quality1?: string | undefined | null;
    qualitydescription1?: string | undefined | null;
    quality2?: string | undefined | null;
    qualitydescription2?: string | undefined | null;
    quality3?: string | undefined | null;
    qualitydescription3?: string | undefined | null;
    isAutonomous?: string | undefined | null;
    thirdTitle?: string | undefined | null;
    thirdButtonText?: string | undefined | null;
  }

export function FeatureSectionOne({isAutonomous, thirdTitle, mainColor, secondaryColor, thirdButtonText, accentColor, quality1, qualitydescription1, quality2, qualitydescription2, quality3, qualitydescription3, onClick}: IThirdSectionProp) {
  return (
    <section className="py-28 px-4 bg-white">
      <div className="container mx-auto mb-20 text-center">
        <Typography color="blue" className="mb-2 font-bold">
          Social Analytics
        </Typography>
        <Typography variant="h2" color="blue-gray" className="mb-4">
          Turn your idea into a startup
        </Typography>
        <Typography
          variant="lead"
          color="blue-gray"
          className="mx-auto w-full px-4 text-gray-700 md:w-10/12 lg:w-7/12 lg:px-8"
        >
          We&apos;re constantly trying to express ourselves and actualize our
          dreams. If you have the opportunity to play
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-10 md:grid-cols-2 lg:grid-cols-3">
      <Card color="transparent" shadow={false}>
      <CardBody className="grid justify-center text-center">
        <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-blue-100/80 p-2.5 text-blue-500 ring-8 ring-blue-100/40">
        <ChatBubbleOvalLeftEllipsisIcon className="h-6 w-6" strokeWidth={2} />
        </div>
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-2 !font-semibold"
        >
            {quality1}
        </Typography>
        <Typography
          color="blue-gray"
          className="px-8 font-normal text-gray-700"
        >
            {qualitydescription1}
        </Typography>
      </CardBody>
    </Card>

    {/*  */}
    <Card color="transparent" shadow={false}>
      <CardBody className="grid justify-center text-center">
        <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-blue-100/80 p-2.5 text-blue-500 ring-8 ring-blue-100/40">
        <EyeIcon className="h-6 w-6" strokeWidth={2} />
        </div>
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-2 !font-semibold"
        >
            {quality2}
        </Typography>
        <Typography
          color="blue-gray"
          className="px-8 font-normal text-gray-700"
        >
            {qualitydescription2}
        </Typography>
      </CardBody>
    </Card>

    {/*  */}

    <Card color="transparent" shadow={false}>
      <CardBody className="grid justify-center text-center">
        <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-blue-100/80 p-2.5 text-blue-500 ring-8 ring-blue-100/40">
        <LinkIcon className="h-6 w-6" strokeWidth={2} />
        </div>
        <Typography
          variant="h5"
          color="blue-gray"
          className="mb-2 !font-semibold"
        >
            {quality3}
        </Typography>
        <Typography
          color="blue-gray"
          className="px-8 font-normal text-gray-700"
        >
            {qualitydescription3}
        </Typography>
      </CardBody>
    </Card>
      </div>
    </section>
  );
}

export default FeatureSectionOne;