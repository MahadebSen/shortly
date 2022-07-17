import styled from "styled-components";
import theme from "./theme";

const { breakpoints, colors, typography } = theme;

const { sm, md, lg } = breakpoints;
const { primary, secondary, neutral } = colors;
const { fontSize, fontWeights } = typography;

const Navbar = styled.div`
  display: flex;
  align-items: center;
  padding: 0 100px;
  & p {
    font-size: 25px;
    font-weight: 800;
  }
  & ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    list-style: none;
    column-gap: 20px;
    & li {
      font-size: 12px;
      font-weight: 800;
      color: ${neutral.gray};
      &:hover {
        color: black;
      }
    }
  }
`;

export { Navbar };
