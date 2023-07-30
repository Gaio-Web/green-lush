import React, { useEffect, useState } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from '@material-tailwind/react';
import { ItemCard } from './Components/Cards';
import axios from 'axios';
import { Contact } from '../../types';
import { ChooseAnPick } from '../../Compoents/ChooseAnPic';
import { LogoCard } from './Components/LogoCard';

function Form(): JSX.Element {
  const [data, setData] = useState<Contact | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const response = await axios.get<Contact>(
          `${
            import.meta.env.VITE_MAIN_API_URL
          }/findByConvertedName/atila-de-freitas`,
        );
        setData(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData()
      .then(() => {
        console.log('Data fetched successfully!');
      })
      .catch((error) => console.error(error))
      .finally(() => console.log('chegou', data?.convertedName));
  }, []);

  if (!data) {
    return (
      <div>
        <h1>hue</h1>
      </div>
    );
  }

  return (
    <>
      <section className="flex h-screen p-10 gap-2 aling-center justify-center">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
          {/* Logomarca */}
          <LogoCard logo={data?.photos.logo.base64} />

          {/* Primeira sessão */}
          <ItemCard
            key={1}
            title={data?.call}
            content={data?.description}
            photo={data?.photos.photo1.base64}
            btnText={'Editar primeira sessão'}
          />

          {/* Segunda sessão */}
          <ItemCard
            key={2}
            title={data?.secondTitle}
            sectionTitle={'O que oferecemos'}
            content={data?.products}
            photo={data?.photos.photo3.base64}
            btnText={'Editar segunda sessão'}
          />

          {/* Quinta sessão */}
          <ItemCard
            key={3}
            title={data?.thirdTitle}
            sectionTitle={'Minha história'}
            content={data?.history}
            photo={data?.photos.photo2.base64}
            btnText={'Editar quinta sessão'}
          />
        </div>
      </section>
    </>
  );
}

export { Form };
