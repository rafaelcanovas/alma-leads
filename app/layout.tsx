import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { Montserrat } from 'next/font/google';
import StyledComponentsRegistry from "@/lib/registry";

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
        <StyledComponentsRegistry>
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </StyledComponentsRegistry>
      </body>
    </html >
  );
}
