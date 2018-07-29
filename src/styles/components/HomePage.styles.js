import { setTextProps, setImgProps } from './Mixins.styles';
import styled, { css } from 'styled-components'

const Home = styled.div`
`
const Img = styled.img`
  ${setImgProps('0','auto', '50vw', '5vh', '5vh')}
`

const Welcome = styled.h4`
  ${setTextProps('30px','300','yellow')}
  margin-bottom: 20px;
`
const Bubble = styled.div`
    font-size: 22px;
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    text-align: center;
    vertical-align: middle;
    border: 3px rgba(255, 255, 255, 0.8) solid;
    position: absolute;
`
const Chat = Bubble.extend`
    width: 40vw;
    height: 40vw;
    margin-left: 30vw;
    margin-top: 17vh;
    line-height: 40vw;  
`
const Survey = Bubble.extend`
    width: 30vw;
    height: 30vw;
    line-height: 30vw;   
    margin-left: 25vw;
`
const Journal = Bubble.extend`
    width: 25vw;
    height: 25vw;
    margin-top: 30vh;
    margin-left: 4vh;
    line-height: 25vw;   
`
const Emoji = Bubble.extend`
    width: 25vw;
    height: 25vw;
    margin-left: 60vw;
    margin-top: 7vh;
    line-height: 25vw;   
`

export { Home, Img, Welcome, Chat, Survey, Journal, Emoji}
