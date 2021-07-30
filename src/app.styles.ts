import styled,{ createGlobalStyle } from "styled-components";

import BGImage from "./assets/images/background1.jpg";

export const GlobalStyle = createGlobalStyle`
html{
    height: 100%;
}
body{
    background-image: url(${BGImage});
    background-size: contain;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
}
*{
    box-sizing: border-box;
    font-family: 'Catamaran', sans-serif;
}
` 

export const Wrapper = styled.div`
display: flex;
align-content: center;
align-items: center;
flex-flow: column;
> p {
    color: black;
}
.quizscore{
color: black;
font-size: 2rem;
margin: 0;
}
h1{
    font-family: Fascinate Inline, Haettenschweiler, 'Arial Narrow Bold', sans-serif, ;
    background-image: linear-gradient(180deg, #fff, #87f1ff);
    background-size: 100%;
    background-clip: text;
    -webkit-background-clip:text;
    -webkit-text-fill-color:transparent;
    filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    text-align: center;
    margin: 20px;
}
.nextQs, .startquiz{
    cursor: pointer;
    border: 2px solid chartreuse;
    margin: 20px 0;
    height: 40px;
}
.startquiz{
    max-width: 200px;
}
`