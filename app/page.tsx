'use client';

import { useTranslations } from 'next-intl';

import ThemeProvider from "./theme";
import { Hero, Logo } from "./styles";

export default function Home() {
  const t = useTranslations();

  return (
    <ThemeProvider>
      <Hero>
        <Logo />
        <h2>{t('getAnAssesment')}</h2>
      </Hero>
    </ThemeProvider>
  );
}
