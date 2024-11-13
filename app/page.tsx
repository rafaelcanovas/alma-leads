'use client';

import { useTranslations } from 'next-intl';

import { materialCells, materialRenderers } from '@jsonforms/material-renderers';
import { JsonForms } from '@jsonforms/react';
import { useState } from 'react';
import { howCanWeHelpYouSchema, leadsFormSchema, visaCategoriesSchema, visaCategoriesUISchema } from "./forms";
import { DiceIcon, HeartIcon, Hero, InfoIcon, LeadsForm, Logo } from "./styles";


export default function Home() {
  const t = useTranslations();
  const [data, setData] = useState({});

  return (
    <>
      <Hero>
        <Logo />
        <h1>{t('getAnAssesment')}</h1>
      </Hero>
      <LeadsForm>
        <InfoIcon />
        <h2>{t('leadsFormTitle')}</h2>
        <h3>{t('leadsFormSubtitle')}</h3>
        <JsonForms
          data={data}
          schema={leadsFormSchema}
          cells={materialCells}
          renderers={materialRenderers}
          onChange={({ data, errors }) => setData(data)}
        />
        <DiceIcon />
        <h2>{t('visaCategoriesOfInterest')}</h2>
        <JsonForms
          data={data}
          schema={visaCategoriesSchema}
          uischema={visaCategoriesUISchema}
          cells={materialCells}
          renderers={materialRenderers}
          onChange={({ data, errors }) => setData(data)}
        />
        <HeartIcon />
        <h2>{t('howCanWeHelpYou')}</h2>
        <JsonForms
          data={data}
          schema={howCanWeHelpYouSchema}
          cells={materialCells}
          renderers={materialRenderers}
          onChange={({ data, errors }) => setData(data)}
        />
      </LeadsForm>
    </>
  );
}
