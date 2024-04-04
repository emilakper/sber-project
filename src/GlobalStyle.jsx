import { createGlobalStyle } from 'styled-components';
import { salutejs_sber__dark } from '@salutejs/plasma-tokens/themes'; // Или один из списка: salutejs_eva__dark, salutejs_joy__dark, salutejs_eva__light, salutejs_sber__light
import {
    text, // Цвет текста
    background, // Цвет подложки
    gradient, // Градиент
} from '@salutejs/plasma-tokens';
import styled from 'styled-components';

const ThemeStyle = createGlobalStyle(salutejs_sber__dark);

const DocStyles = createGlobalStyle`
  html {
    color: ${text};
    background-color: ${background};
    background-image: ${gradient};
    min-height: 100vh;
  }
`;

export const Filler = styled.div`
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 0.5rem 1rem;
        background-color: rgba(255,255,255,0.06);
    `;

export const GlobalStyle = () => (
    <>
        <DocStyles />
        <ThemeStyle />
    </>
);