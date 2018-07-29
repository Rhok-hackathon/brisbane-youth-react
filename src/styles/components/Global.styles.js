import styled, { css, injectGlobal } from 'styled-components'
import bgimg from '../../images/bg-img.png'

export default injectGlobal`
body {
    margin: 0;
    font-family: 'Roboto', sans-serif;
    background-color: #573E54;
    text-align:center;
    color:white;
    weight: 400;
    background-image: url(${bgimg});
    background-size: cover;
}
html {
    position: relative;
    min-height: 100vh;
    max-width: 100vw;
    overflow-x: hidden;
}
`