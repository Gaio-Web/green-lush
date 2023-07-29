import { Header } from './Pages/Main/Sections/Header/Header';
import { SecondSection } from './Pages/Main/Sections/2/SecondSection';
import React, { useState, useEffect } from 'react';
import { Contact } from './types';
import axios from 'axios';
import { ThirdSection } from './Pages/Main/Sections/3/ThirdSection';
import { FifthSection } from './Pages/Main/Sections/5/FifthSection';
import { AddressCard } from './Pages/Main/Sections/Address/Address';

export default function App() {
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
    // <SignIn />
    <>
      <Header
        call={data?.call}
        description={data?.description}
        photoBase64={data?.photos.photo1.base64}
        name={data?.name}
      />
      <SecondSection
        isAutonomous={data?.isAutonomous}
        mainColor={data?.mainColor}
        accentColor={data?.accentColor}
        products={data?.products}
        photoBase64={data?.photos.photo3.base64}
        coverKeyWords={data?.coverKeyWords}
        secondTitle={data?.secondTitle}
        secondButtonText={data?.secondButtonText}
      />

      <ThirdSection
        mainColor={data?.mainColor}
        accentColor={data?.accentColor}
        secondaryColor={data?.secondaryColor}
        isAutonomous={data?.isAutonomous}
        quality1={
          data?.quality1?.charAt(0).toUpperCase() + data?.quality1?.slice(1)
        }
        qualitydescription1={data?.qualitydescription1?.replace(/^"|"$/g, '')}
        quality2={
          data?.quality2?.charAt(0).toUpperCase() + data?.quality2?.slice(1)
        }
        qualitydescription2={data?.qualitydescription2?.replace(/^"|"$/g, '')}
        quality3={
          data?.quality3?.charAt(0).toUpperCase() + data?.quality3?.slice(1)
        }
        qualitydescription3={data?.qualitydescription3?.replace(/^"|"$/g, '')}
        thirdTitle={data?.thirdTitle}
        thirdButtonText={data?.thirdButtonText}
      />

      <FifthSection
        history={data?.history}
        photoBase64={data?.photos.photo2.base64}
      />

      <AddressCard
        zipCode={data?.address.zipCode}
        street={data?.address.street}
        number={data?.address.number}
        city={data?.address.city}
        complement={data?.address.complement}
        state={data?.address.state}
        mainColor={data?.mainColor}
        neightborhood={data?.address.neighborhood}
        secondaryColor={data?.secondaryColor}
      />
    </>
  );
}
