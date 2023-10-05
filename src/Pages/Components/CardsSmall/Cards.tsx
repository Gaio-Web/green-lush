import React from 'react';

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from '@material-tailwind/react';
import { ArrowSmallRightIcon } from '@heroicons/react/24/outline';

interface ICardProps {
  title: string;
  text: string;
}

export function CardThree({ text, title }: ICardProps) {
  return (
    <Card shadow={false} className="w-auto bg-lush-beige-scnd">
      <CardBody className="px-4">
        <Typography
          variant="h4"
          className="mt-1 mb-2 font-medium text-lush-green"
        >
          {title}
        </Typography>
        <Typography className="mb-8 text-lush-black">{text}</Typography>
      </CardBody>
    </Card>
  );
}

export default CardThree;
