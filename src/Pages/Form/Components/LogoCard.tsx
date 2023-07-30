import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from '@material-tailwind/react';
import { ChooseAnPick } from '../../../Compoents/ChooseAnPic';

interface ILogoCardProps {
  logo: string | undefined;
}

function LogoCard({ logo }: ILogoCardProps): JSX.Element {
  return (
    <>
      <Card className=" mt-5 h-fit">
        <CardHeader color="blue-gray" className="h-60">
          {logo == '' || logo == null ? (
            <ChooseAnPick />
          ) : (
            <img
              src={logo}
              alt="img-blur-shadow"
              className="h-full w-full object-cover"
            />
          )}
        </CardHeader>
        <CardBody>
          <Typography color="blue" className="mb-4 font-bold">
            Logomarca
          </Typography>
          <Button variant="outlined" size="sm">
            Escolher logomarca
          </Button>
        </CardBody>
      </Card>
    </>
  );
}
export { LogoCard };
