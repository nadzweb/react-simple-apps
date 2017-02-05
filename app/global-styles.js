import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #fafafa;
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }
  button.btn-primary {
    background-color: #4CAF50;
    color: #fff;
    border-color:#4cae4c;
  }
  button.btn-primary:hover, .btn-primary:link{ 
    background-color: #4CAF50;
    color: #fff;
    border-color:#4cae4c;
    opacity: 0.9;}
`;
