import styled from "styled-components";
import theme from "./theme";

const { breakpoints, colors, typography } = theme;

const { sm, md, lg } = breakpoints;
const { primary, secondary, neutral } = colors;
const { font, fontSize, fontWeights } = typography;

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
  & div {
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

    & button {
      padding: 10px 30px;
      border-radius: 5px;
      background-color: ${primary.cyan};
      color: white;
      border: 0px;
      font-family: ${font};
      cursor: pointer;
      &:hover {
        background-color: #9be3e2;
      }
    }
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

const P = styled.p`
  color: ${neutral.gray};
  font-size: ${(props) => props.size};
  margin-top: ${(props) => props.top};
`;

const RecognitionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 70px;
  margin: 0 25px;
  padding-bottom: 85px;
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

const BoostLinkSection = styled.section``;

export {
  Navbar,
  Banner,
  Background,
  ShortLinkSection,
  StatisticsHeading,
  SubHeading,
  P,
  RecognitionContainer,
  EachRecognitionStyle,
  BoostLinkSection,
};
