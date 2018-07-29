import styled, { css } from "styled-components";

const setButtonProps = (backGround, textColor, borderRadius) => css`
  background-color: rgba(${backGround}, 0.5);
  color: ${textColor};
  border-radius: ${borderRadius};
`;

export { setButtonProps };
