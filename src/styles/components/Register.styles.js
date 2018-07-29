import styled, { css } from "styled-components";
import { setButtonProps } from "./Mixins.styles.js";

const Button = styled.button`
  ${setButtonProps("black", "white")};
`;

export { Button };
