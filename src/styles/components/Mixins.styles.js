import styled, { css } from "styled-components";

const setButtonProps = (backGround, textColor, borderRadius) => css`
  background-color: rgba(${backGround}, 0.5);
  color: ${textColor};
  border-radius: ${borderRadius};
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
