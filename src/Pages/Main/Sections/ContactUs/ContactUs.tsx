import React from 'react';
import { Typography } from '@material-tailwind/react';

import Contact from '../../../../assets/Contact.png';

function ContactUs() {
  return (
    <section className="py-12 px-8 bg-lush-beige">
      <div className="mx-auto max-w-screen-md">
        <Typography variant="h2" className="mb-6 text-lush-green">
          Contact Us
        </Typography>
        <Typography className="mb-8 font-normal text-lush-black">
          Ready to get started on your dream outdoor space? Contact us today to
          schedule a consultation! 8/30/23 3:13 PM
        </Typography>
        <img
          src={Contact}
          alt="team work"
          className="mb-4 h-[28rem] w-full rounded-xl object-cover"
        />
      </div>
    </section>
  );
}

export { ContactUs };
