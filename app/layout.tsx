import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { Montserrat } from 'next/font/google';

import ThemeProvider from "@/lib/providers/theme";
import StyledComponentsProvider from "../lib/providers/styled-components";

const montserrat = Montserrat({
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Alma Leads",
  description: "Application to manage Alma leads.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className={montserrat.className}>
        <StyledComponentsProvider>
          <NextIntlClientProvider messages={messages}>
            <ThemeProvider>
              {children}
            </ThemeProvider>
          </NextIntlClientProvider>
        </StyledComponentsProvider>
      </body>
    </html >
  );
}
