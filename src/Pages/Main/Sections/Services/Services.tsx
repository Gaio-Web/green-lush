import React from 'react';
import { CardTwo } from '../../../Components/Cards/Cards';

import One from '../../../../assets/1.png';
import Two from '../../../../assets/2.png';
import Three from '../../../../assets/3.png';
import Four from '../../../../assets/4.png';

function Services() {
  return (
    <section className="px-4 py-12 bg-lush-beige-scnd">
      <div className="container mx-auto">
        <div className="mb-10 mt-10 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-3 justify-center gap-20">
          <CardTwo
            image={One}
            title={'Designers'}
            text={
              'Our experienced designers will help you craft an outdoor space that is personalized, stunning, and sustainable.'
            }
          />
          <CardTwo
            image={Two}
            title={'Maintenance Team'}
            text={
              'Our expert maintenance team is dedicated to keeping your outdoor space healthy, vibrant, and looking its best.'
            }
          />
          <CardTwo
            image={Four}
            title={'Builders'}
            text={
              'Our skilled builders will help you realize your outdoor dreams, crafting durable features to last a lifetime'
            }
          />
          <CardTwo
            image={Three}
            title={'Irrigation & Drainage Specialists'}
            text={
              'Our experienced specialists will help you keep your lawn and garden well-maintained and healthy, with a focus on sustainability and water conservation.'
            }
          />
        </div>
      </div>
    </section>
  );
}

export { Services };
