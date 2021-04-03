import React, { ReactElement } from 'react';
import { Helmet } from 'react-helmet';
import PageLayout from '../components/layout/PageLayout';
import ServicesProvided from '../components/ServicesProvided';
import PageHeading from '../components/PageHeading';

const ServicesPages = (): ReactElement => (
  <div>
    <Helmet
      title='Dr. Carlie Amore, DDS | Doctor of Dental Surgery'
      meta={[
        { name: 'description', content: 'The official website of Dr. Carlie Amore, DDS. Dr. Carlie Amore currently practices at Broadmoor Holistic Dentistry in Overland Park, Kansas and specializes in holistic dentistry.' },
        { name: 'keywords', content: 'holistic dentist, holistic dentistry, dentist in Overland Park' },
      ]}
    />
    <PageLayout>
      <div className='m-12'>
        <PageHeading headingText='Specialty Services' />
        <ServicesProvided />
      </div>
    </PageLayout>
  </div>
);

export default ServicesPages;
