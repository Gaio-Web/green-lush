import { Typography, Card } from "@material-tailwind/react";
import HeroSectionTwo from "./Pages/Main/Sections/Header/Header";
import FeatureSectionThree from "./Pages/Main/Sections/2/SecondSection";
import React, { useState, useEffect } from "react";
import { Contact } from "./types";
import axios from "axios";
import FeatureSectionOne from "./Pages/Main/Sections/3/ThirdSection";
import SignIn from "./Pages/Login/Login";
import ContentSectionOne from "./Pages/Main/Sections/5/History";
import { LoginCard } from "./Pages/Main/Sections/Address/Address";

export default function App() {


  const [data, setData] = useState<Contact | null>(null);
  const [loading, setLoading] = useState<boolean>(true);


  useEffect(() => {
    async function fetchData() {
        setLoading(true);
        try {
            const response = await axios.get<Contact>(
                `${import.meta.env.VITE_MAIN_API_URL}/findByConvertedName/atila-de-freitas`
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

  return (
    // <SignIn />
  <>
  <HeroSectionTwo 
    call={data?.call}
    description={data?.description}
    photoBase64={data?.photos.photo1.base64}
    name={data?.name}
  />
  <FeatureSectionThree
    isAutonomous={data?.isAutonomous}
    mainColor={data?.mainColor}
    accentColor={data?.accentColor}
    products={data?.products}
    photoBase64={data?.photos.photo3.base64}
    coverKeyWords={data?.coverKeyWords}
    secondTitle={data?.secondTitle}
    secondButtonText={data?.secondButtonText}
  />

  <FeatureSectionOne
    mainColor={data?.mainColor}
    accentColor={data?.accentColor}
    secondaryColor={data?.secondaryColor}
    isAutonomous={data?.isAutonomous}
    quality1={data?.quality1.charAt(0).toUpperCase() + data?.quality1.slice(1)}
    qualitydescription1={data?.qualitydescription1.replace(/^"|"$/g, '')}
    quality2={data?.quality2.charAt(0).toUpperCase() + data?.quality2.slice(1)}
    qualitydescription2={data?.qualitydescription2.replace(/^"|"$/g, '')}
    quality3={data?.quality3.charAt(0).toUpperCase() + data?.quality3.slice(1)}
    qualitydescription3={data?.qualitydescription3.replace(/^"|"$/g, '')}
    thirdTitle={data?.thirdTitle}
    thirdButtonText={data?.thirdButtonText}
  />

  <ContentSectionOne history={data?.history} photoBase64={data?.photos.photo2.base64}/>

  <LoginCard 
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
