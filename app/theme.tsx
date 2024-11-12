import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles";

const theme = {
    colors: {
        primary: '#d5e0a4',
    }
}

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


