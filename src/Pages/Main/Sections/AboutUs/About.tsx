import React from 'react';
import { Typography } from '@material-tailwind/react';

import About from '../../../../assets/About.png';

export function ContentSectionTwo() {
  return (
    <section className="py-12 px-8 bg-lush-beige-scnd">
      <div className="mx-auto max-w-screen-md">
        <Typography variant="h2" className="mb-6 text-lush-green">
          About Us
        </Typography>
        <Typography className="mb-8 font-normal text-lush-black">
          At Green Lush Corp, we're passionate about creating beautiful and
          sustainable outdoor spaces that make a difference for our clients and
          for the environment. Our team of experienced designers, builders, and
          maintenance specialists is committed to providing the highest level of
          service and quality to every project we take on. Contact us today to
          learn more!
        </Typography>
        <img
          src={About}
          alt="team work"
          className="mb-4 h-[28rem] w-full rounded-xl object-cover"
        />
      </div>
    </section>
  );
}

export default ContentSectionTwo;
