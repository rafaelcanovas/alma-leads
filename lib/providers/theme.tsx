'use client'

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../../app/styles";
import { theme } from "@/app/theme";

export default function Provider({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ThemeProvider theme={theme}>
            {children}
            <GlobalStyle />
        </ThemeProvider>
    );
}


