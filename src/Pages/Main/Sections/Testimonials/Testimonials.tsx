import { Typography } from '@material-tailwind/react';
import React from 'react';
import CardThree from '../../../Components/CardsSmall/Cards';

function Testimonials(): JSX.Element {
  return (
    <section className="px-4 bg-lush-beige-scnd">
      <div className="container mx-auto">
        <div className="grid items-center py-12 px-2 lg:ml-8 lg:py-20 gap-5">
          <Typography variant="h2" className="mb-2 text-lush-green">
            Client Testimonials
          </Typography>
          <div className="py-5">
            <Typography variant="h5" className="text-lush-green">
              &quot;Absolutely Stunning&quot;
            </Typography>
            <Typography variant="p">
              Green Lush Corp created a beautiful outdoor space for our family
              that exceeded our wildest dreams. We highly recommend them!
            </Typography>
          </div>
          <div className="py-5">
            <Typography variant="h5" className="text-lush-green">
              &quot;Professional and Efficient&quot;
            </Typography>
            <Typography variant="p">
              The team at Green Lush Corp was professional, efficient, and a
              pleasure to work with from start to finish.
            </Typography>
          </div>
          <div className="py-5">
            <Typography variant="h5" className="text-lush-green">
              &quot;Exceeded Our Expectations&quot;
            </Typography>
            <Typography variant="p" className="text-base">
              We were blown away by the beauty and sustainability of our new
              outdoor space. Green Lush Corp truly exceeded our expectations.
            </Typography>
          </div>
        </div>
      </div>
    </section>
  );
}

export { Testimonials };
