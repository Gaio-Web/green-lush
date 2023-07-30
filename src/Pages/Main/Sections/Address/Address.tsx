import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from '@material-tailwind/react';

interface ISeventhSectionProp {
  zipCode?: string | undefined;
  street?: string | undefined;
  number?: string | undefined;
  complement?: string | undefined;
  city?: string | undefined;
  state?: string | undefined;
  mainColor?: string | undefined;
  secondaryColor?: string | undefined;
  neightborhood?: string | undefined;
}

function AddressCard({
  mainColor,
  secondaryColor,
  neightborhood,
  zipCode,
  street,
  number,
  city,
  state,
  complement,
}: ISeventhSectionProp): JSX.Element {
  return (
    <section className="py-28 px-4 bg-white flex items-center justify-center">
      <Card className="w-1/2">
        <div className="relative w-full h-96 ">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12080.73732861526!2d-74.0059418!3d40.7127847!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40zMDA2JzEwLjAiTiA3NMKwMjUnMzcuNyJX!5e0!3m2!1sen!2sus!4v1648482801994!5m2!1sen!2sus"
            frameBorder="0"
            aria-hidden="false"
          ></iframe>
        </div>
        <CardBody className="flex flex-col gap-4">
          <Typography variant="p" color="black">
            {street}, {neightborhood}, {number}, {complement}
            <br />
            {city}/{state}{' '}
          </Typography>
        </CardBody>
        <CardFooter className="pt-0">
          <Button variant="gradient" fullWidth>
            Copiar endereço
          </Button>
        </CardFooter>
      </Card>
    </section>
  );
}

export { AddressCard };
