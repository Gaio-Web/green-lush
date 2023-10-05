import { Header } from './Pages/Main/Sections/Header/Header';
import { SecondSection } from './Pages/Main/Sections/2/SecondSection';
import React, { useState, useEffect } from 'react';
import { Contact } from './types';
import axios from 'axios';
import { Services } from './Pages/Main/Sections/Services/Services';
import { FeatureSectionOne } from './Pages/Main/Sections/Previous/Previous';
import { Testimonials } from './Pages/Main/Sections/Testimonials/Testimonials';
import ContentSectionTwo from './Pages/Main/Sections/AboutUs/About';
import { ContactUs } from './Pages/Main/Sections/ContactUs/ContactUs';

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
          }/findByConvertedName/green-lush-corp`,
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

      <Services />

      <FeatureSectionOne />

      <Testimonials />

      <ContactUs />

      <ContentSectionTwo />
    </>
    // <>
    //   <Form />
    // </>
  );
}
