import { setTextProps, setImgProps } from './Mixins.styles';
import styled, { css } from 'styled-components'

const Home = styled.div`
`
const Img = styled.img`
  ${setImgProps('0','100px', 'auto', '5vh', '5vh')}
`
const Welcome = styled.h4`
  ${setTextProps('30px','300','yellow')}
  margin-bottom: 20px;
`
const Login = styled.h4`
${setTextProps('30px','300','yellow')}
margin-bottom: 20px;
`

const Bubble = styled.div`
    font-size: 22px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    text-align: center;
    vertical-align: middle;
    border: 5px rgba(255, 255, 255, 0.8) solid;
    position: absolute;
`
const Bubble1 = Bubble.extend`
    width: 40vw;
    height: 40vw;
    margin-left: 35%;
    margin-top: 5vh;
    line-height: 20vw;  
`
const Bubble2 = Bubble.extend`
    width: 150px;
    height: 150px;
    line-height: 150px;   
    margin-left: 55vw;
    margin-right: 45vw;
`
const Bubble3 = Bubble.extend`
    width: 100px;
    height: 100px;
    margin: 0 40vw 0 60vw;
    line-height: 100px;   
`
const Bubble4 = Bubble.extend`
    width: 100px;
    height: 100px;
    margin: 0 60vw 0 40vw;
    line-height: 100px;   
`
// const Container = styled.div`
//     height: 50vh;
//     width: 50vw;
// `
export { Home, Img, Welcome, Login, Bubble1, Bubble2, Bubble3, Bubble4}
