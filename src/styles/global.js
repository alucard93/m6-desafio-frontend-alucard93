import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Montserrat', sans-serif;
    }

    :root{
        --Black: #0D0D0D;
        --White: #FFFFFF;
        
        --background: #f5f7fa;
        --backgroundForm: #fefffe;

        --borderList: #c7daf5;
        --borderForm: #d8e2e9;

        --textH1: #686968;
        --text: #828283;
        --textList: #447abd;
        --paragraf: #9fc3f3;
        --link: #3498db;
    }


    html, body, #root {
        min-height: 100%;
        width:100%;
        background: var(--background);
    }

    body {
        -webkit-font-smoothing: antialiased !important;
        padding: 1rem;
    }

    a {
        color: var(--link)
    }
    a.hover {
        text-decoration: underline;
    }

    body, input, p, a, button {
        color: var(--text);
        font-family: 'Montserrat', sans-serif;
    }

    section, aside, div{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
    }

    button {
        cursor: pointer;
    }

`;

export const Container = styled.div`
    width: 100%;
    max-width: 900px;
    margin: 0 auto;
`;
