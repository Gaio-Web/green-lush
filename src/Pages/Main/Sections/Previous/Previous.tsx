import React from 'react';
import { Card, CardBody, Typography } from '@material-tailwind/react';
import {
  EyeIcon,
  ChatBubbleOvalLeftEllipsisIcon,
  BoltIcon,
  FaceSmileIcon,
  LinkIcon,
  HeartIcon,
} from '@heroicons/react/24/outline';

function FeatureCard({ icon, title, children }) {
  return (
    <Card color="transparent" shadow={false}>
      <CardBody className="grid justify-center text-center">
        <div className="mx-auto mb-6 grid h-12 w-12 place-items-center rounded-full bg-lush-green/60 p-2.5 text-lush-green ring-8 ring-lush-green/40">
          <h1 className="text-lush-green" style={{ fontWeight: 'bold' }}>
            {icon}
          </h1>
        </div>
        <Typography
          variant="h5"
          className="mb-2 !font-semibold text-lush-green"
        >
          {title}
        </Typography>
        <Typography
          color="blue-gray"
          className="px-8 font-normal text-gray-700"
        >
          {children}
        </Typography>
      </CardBody>
    </Card>
  );
}

const features = [
  {
    icon: '1',
    title: 'Community Garden',
    description:
      'We helped design and build a community garden, providing a beautiful and sustainable space for members of the community to grow fresh produce.',
  },
  {
    icon: '2',
    title: 'Private Residence',
    description:
      'We created a stunning outdoor space for a private residence, complete with a patio, fire pit, and lush garden.',
  },
  {
    icon: '3',
    title: 'Commercial Property',
    description:
      'We provided landscaping and hardscaping services for a commercial property, creating an organized and professional outdoor space.',
  },
];

function FeatureSectionOne() {
  return (
    <section className="py-28 px-4 bg-lush-beige">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h2" className="mb-4 text-lush-green">
          Our Previous Projects
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-y-20 md:grid-cols-2 lg:grid-cols-3">
        {features.map(({ icon, title, description }) => (
          <FeatureCard key={title} icon={icon} title={title}>
            {description}
          </FeatureCard>
        ))}
      </div>
    </section>
  );
}

export { FeatureSectionOne };
