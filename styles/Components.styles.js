import styled from "styled-components";
import theme from "./theme";

const { breakpoints, colors, typography } = theme;

const { sm, md, lg } = breakpoints;
const { primary, secondary, neutral } = colors;
const { font, fontSize, fontWeights } = typography;

const Navbar = styled.div`
  display: flex;
  align-items: center;
  margin: 20px 100px;

  & div {
    margin-top: 9px;
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

const Banner = styled.div`
  text-align: center;
  font-size: 72px;
  font-weight: 700;
  line-height: 83px;
  word-spacing: 10px;
  color: ${neutral.veryDarkBlue};
  & p {
    margin: 10px 0;
  }
`;

const Background = styled.section`
  background-color: #f0f1f6;
`;

const ShortLinkSection = styled.section`
  margin: 0 93px;
  & form {
    background-image: url("../Meteor.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    padding: 10px 20px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    column-gap: 20px;
    padding: 35px 0;
    position: relative;
    bottom: 57px;

    & input {
      display: block;
      width: 490px;
      height: 40px;
      padding-left: 17px;
      border-radius: 5px;
      font-family: ${font};
      font-size: 14px;
      color: ${secondary.red};
      outline: 0;
    }
  }
  & div {
  }
`;

const StatisticsHeading = styled.section`
  text-align: center;
  font-size: 33px;
  margin-block-end: -1em;
`;

const SubHeading = styled.div`
  text-align: center;
  margin-block-start: 40px;
  margin-bottom: 110px;
`;

const RecognitionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 70px;
  margin: 0 25px;
  margin-bottom: 92px;
`;

const EachRecognitionStyle = styled.div`
  background-color: white;
  padding: 10px 25px;
  border-radius: 5px;
  & div {
    background-color: ${primary.darkViolet};
    border-radius: 100%;
    width: 65px;
    height: 65px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: -43px;
    margin-bottom: 20px;
  }
`;

const BoostLinkSection = styled.section`
  background-image: url("../Meteor.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  & div {
    color: white;
    font-size: 25px;
    text-align: center;
    & p {
      margin: 10px 0;
    }
  }
`;

const FooterContainer = styled.footer`
  background-color: ${neutral.veryDarkViolet};
`;

const Footer = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  padding-bottom: 30px;

  & div {
    margin-top: 23px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
`;

const FooterLogoPart = styled.section`
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  & section > section {
    margin-top: 10px;
    display: flex;
    flex-direction: row;
    column-gap: 15px;
    & a {
      &:hover {
        color: ${primary.cyan};
      }
    }
  }
`;

// styled elements

const P = styled.p`
  color: ${neutral.gray};
  font-size: ${(props) => props.size};
  margin-top: ${(props) => props.top};
`;

const Button = styled.button`
  padding: ${(props) => props.p};
  border-radius: ${(props) => props.round};
  background-color: ${primary.cyan};
  color: white;
  border: 0px;
  font-family: ${font};
  cursor: pointer;
  &:hover {
    background-color: #9be3e2;
  }
`;

const Ul = styled.ul`
  list-style: none;
  font-size: small;
  & p {
    color: white;
  }
  & li {
    color: ${neutral.grayishViolet};
    cursor: pointer;
    margin-bottom: 5px;
    &:hover {
      color: ${primary.cyan};
    }
  }
`;

const Div = styled.div``;

export {
  Navbar,
  Banner,
  Background,
  ShortLinkSection,
  StatisticsHeading,
  SubHeading,
  P,
  Button,
  Ul,
  Div,
  RecognitionContainer,
  EachRecognitionStyle,
  BoostLinkSection,
  FooterContainer,
  FooterLogoPart,
  Footer,
};
