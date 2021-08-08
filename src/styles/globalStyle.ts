import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
::selection {
    background: #333333;
    color: #ffffff;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  *:focus {
    outline: none;
  }

  /* Works on Firefox */
* {
  scrollbar-width: thin;
  scrollbar-color: #F2CBBF #F2CBBF;
}

/* Works on Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 12px;
}

*::-webkit-scrollbar-track {
  background: #C4C4C4;
}

*::-webkit-scrollbar-thumb {
  background-color: #F2CBBF;
  border-radius: 20px;
  border: 3px solid #F2CBBF;
}

html{
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
}

body,html {
    
    margin: 0px;

}

body {
  font-size: 16px;
  line-height: 28px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale; 
  overflow-x: hidden !important;
  font-weight: 400;
  margin: 0;
  padding: 0;
  font-family: ${(props) => props.theme.fonts.body}; 
}
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: ${(props) => props.theme.fonts.body}; 
  color: ${(props) => props.theme.colors.black};
  margin: 0;
}

p{
    margin: 0 0 15px 0;
}

a{
    text-decoration: none; 
}
img{
  max-width: 100%;
}

section{
    position: relative;
}

h2{
  font-size: 50px;
  line-height: 60px;
}
h3{
  font-size: 36px;
  line-height: 50px;
}

h4{
  font-size: 30px;
  line-height: 40px;
}

h5{
  font-size: 16px;
  line-height: 24px;
}
#root{
  max-width: 1140px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
`;

export default GlobalStyle;
