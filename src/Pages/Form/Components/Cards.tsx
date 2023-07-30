import React from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from '@material-tailwind/react';
import { ChooseAnPick } from '../../../Compoents/ChooseAnPic';

interface ICardProp {
  title: string | undefined;
  sectionTitle?: string | undefined;
  content: string | undefined;
  btnText: string | undefined;
  photo: string | undefined;
  key: number;
}

function ItemCard({
  title,
  sectionTitle,
  content,
  btnText,
  photo,
  key,
}: ICardProp): JSX.Element {
  return (
    <Card className=" mt-5 ">
      <CardHeader color="blue-gray" className="h-60">
        {photo == '' || photo == null ? (
          <>
            <ChooseAnPick />
          </>
        ) : (
          <>
            <img
              src={photo}
              alt="img-blur-shadow"
              className="h-full w-full object-cover"
            />
          </>
        )}
      </CardHeader>
      <CardBody>
        <Typography color="blue" className="mb-1 font-bold">
          Título da sessão
        </Typography>
        <Typography
          variant="h4"
          color="blue-gray"
          className="mt-1 mb-2 font-medium"
        >
          {title == '' || title == null ? <>{sectionTitle}</> : <>{title}</>}
        </Typography>
        <Typography color="blue" className="mb-1 mt-4 font-bold">
          Descrição
        </Typography>
        <Typography color="gray" className="mb-6">
          {content}
        </Typography>
        <Button variant="outlined" size="sm">
          {btnText}
        </Button>
      </CardBody>
    </Card>
  );
}

export { ItemCard };
