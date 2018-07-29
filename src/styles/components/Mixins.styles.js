import styled, { css } from "styled-components";

const setButtonProps = (backGround, textColor) => css`
  background-color: ${backGround};
  color: ${textColor};
`;
const setTextProps = (size, weight) => css`
  font-size: ${size};
  font-weight: ${weight};
  color: white;
  margin: 0;
  padding: 0.35rem;
`
const setImgProps = (radius,height,width,margin1,margin2) => css`
border-radius: ${radius};
height: ${height};
width: ${width};
margin-top: ${margin1};
margin-bottom: ${margin2};
`

export { setButtonProps, setTextProps, setImgProps };
