import { normalize, lighten } from "polished";
import styled, { createGlobalStyle } from "styled-components";

import logoImage from "/public/images/logo.png";
import heroImage from "/public/images/hero.png";
import infoImage from "/public/images/info.png";
import diceImage from "/public/images/dice.png";
import heartImage from "/public/images/heart.png";


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
    height: 250px;
    display: flex;
    width: auto;
    padding-left: 164px;
    padding-right: 64px;
    justify-content: center;
    flex-direction: column;
;`

export const LeadsForm = styled.form`
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 32px 32px;
    margin: 0 auto;

    h2, h3 {
        text-align: center;
    }

    .MuiFormControl-root {
        margin: 8px 0;
    }

    .MuiInputBase-root {
        border-radius: 16px;
    }
`

export const InfoIcon = styled.img.attrs({
    alt: "Info",
    src: infoImage.src,
})`
    height: 64px;
    width: 64px;
`

export const DiceIcon = styled.img.attrs({
    alt: "Dice",
    src: diceImage.src,
})`
    height: 64px;
    width: 64px;
`

export const HeartIcon = styled.img.attrs({
    alt: "Heart",
    src: heartImage.src,
})`
    height: 64px;
    width: 64px;
`
