import styled, { createGlobalStyle } from "styled-components";
import logoImage from "/public/images/logo.png";
import heroImage from "/public/images/hero.png";
import { normalize } from "polished";


export const GlobalStyle = createGlobalStyle`
  ${normalize()}
`

export const Logo = styled.img.attrs({
    alt: "Alma",
    src: logoImage.src
})`
    height: 28px;
    width: 77px;
`

export const Hero = styled.div`
    background-color: ${props => props.theme.colors.primary};
    background-image: url(${heroImage.src});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: -32px 0;
    height: 200px;
    display: flex;
    width: auto;
    padding-left: 96px;
    padding-right: 32px;
    justify-content: center;
    flex-direction: column;
;`
