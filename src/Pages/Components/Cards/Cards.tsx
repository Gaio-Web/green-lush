import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from '@material-tailwind/react';

interface ICardProps {
  image: any;
  title: string;
  text: string;
}

function CardTwo({ image, title, text }: ICardProps) {
  return (
    <Card className="w-auto max-w-[24rem] bg-lush-beige">
      <CardHeader color="blue-gray" className="relative h-56">
        <img
          src={image}
          alt="img-blur-shadow"
          className="h-full w-full object-cover"
        />
      </CardHeader>
      <CardBody>
        <Typography
          variant="h4"
          color="blue-gray"
          className="mt-1 mb-2 font-medium"
        >
          {title}
        </Typography>
        <Typography color="gray" className="mb-6">
          {text}
        </Typography>
      </CardBody>
    </Card>
  );
}

export { CardTwo };
