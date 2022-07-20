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

  @media (max-width: ${sm}) {
    display: flex;
    justify-content: space-between;
    margin: 0 30px;
    margin-top: 20px;
    margin-bottom: 55px;
  }

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
    @media (max-width: ${sm}) {
      display: none;
    }
  }
`;

const Menubar = styled.div`
  @media only screen and (min-width: ${sm}) and (max-width: ${lg}) {
    display: none;
  }
`;

const Banner = styled.div`
  text-align: center;
  font-size: 65px;
  font-weight: 700;
  line-height: 83px;
  word-spacing: 10px;
  color: ${neutral.veryDarkBlue};
  & p {
    margin: 10px 0;
    @media (max-width: ${sm}) {
      font-size: 50px;
      line-height: 60px;
      padding-bottom: 30px;
    }
  }
`;

const Background = styled.section`
  background-color: #f0f1f6;
`;

const ShortLinkSection = styled.section`
  margin: 0 93px;

  @media (max-width: ${sm}) {
    margin: 0 15px;
  }
  & form {
    background-image: url("../Meteor.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    column-gap: 20px;
    padding: 35px 0;
    position: relative;
    bottom: 57px;

    @media (max-width: ${sm}) {
      display: block;
      padding: 20px 0;
      text-align: center;

      & button {
        padding: 12px 95px;
        font-size: large;
      }
    }

    & input {
      display: block;
      width: 490px;
      height: 40px;
      padding: 0 17px;
      border-radius: 5px;
      font-family: ${font};
      font-size: 14px;
      color: ${secondary.red};
      outline: 0;
      ::-webkit-input-placeholder {
        color: ${secondary.red};
        opacity: 0.5;
      }
      @media (max-width: ${sm}) {
        width: 285px;
        height: 50px;
        font-size: large;
        margin: 0 auto;
        margin-bottom: 35px;
        border: solid ${secondary.red} 2px;
      }
    }
  }
  & div {
    display: flex;
    flex-direction: column;
    row-gap: 15px;
    margin-left: 15px;
    margin-right: 15px;
    margin-top: -35px;
    margin-bottom: 63px;
  }
`;

const EachLinkSection = styled.section`
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2px 20px;
  border-radius: 7px;
  color: ${primary.darkViolet};
  font-size: 14px;
  @media (max-width: ${sm}) {
    display: block;
    padding: 0;
    padding: 0 12px;

    & p {
      border-bottom: solid ${neutral.gray} 1px;
      margin: 0;
      padding: 12px 0;
    }
    & button {
      display: block;
      margin: 0 auto;
      margin-bottom: 15px;
      padding: 12px 120px;
    }
  }
  & div {
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 20px;
    margin: 0;
    color: ${primary.cyan};

    @media (max-width: ${sm}) {
      display: block;
      & p {
        border: 0;
      }
    }
  }
`;

const Error = styled.p`
  color: ${secondary.red};
  text-align: center;
`;

const StatisticsHeading = styled.section`
  text-align: center;
  font-size: 33px;
  margin-block-end: -1em;
  @media (max-width: ${sm}) {
    font-size: 28px;
  }
`;

const SubHeading = styled.div`
  text-align: center;
  margin-block-start: 40px;
  margin-bottom: 110px;
  @media (max-width: ${sm}) {
    margin: 0 15px;
    margin-top: 45px;
    margin-bottom: 80px;
  }
`;

const RecognitionContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 70px;
  margin: 0 25px;
  margin-bottom: 92px;

  @media (max-width: ${sm}) {
    grid-template-columns: 1fr;
  }
`;

const EachRecognitionStyle = styled.div`
  background-color: white;
  padding: 10px 25px;
  border-radius: 5px;

  @media (max-width: ${sm}) {
    text-align: center;
    & p {
      margin-top: 0;
    }
  }

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

    @media (max-width: ${sm}) {
      margin: 0 auto;
      position: relative;
      bottom: 40px;
    }
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

  @media (max-width: ${sm}) {
    grid-template-columns: 1fr;
    padding-bottom: 20px;
  }

  & div {
    margin-top: 23px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    @media (max-width: ${sm}) {
      grid-template-columns: 1fr;
      text-align: center;
    }
  }
`;

const FooterLogoPart = styled.section`
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  @media (max-width: ${sm}) {
    text-align: center;
    padding-top: 25px;
  }

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

    @media (max-width: ${sm}) {
      display: none;
    }
  }
`;

const ExtraLogoSection = styled.section`
  @media (max-width: ${sm}) {
    padding-bottom: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    column-gap: 25px;
  }

  @media only screen and (min-width: ${sm}) and (max-width: ${lg}) {
    display: none;
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
  background-color: ${(props) => props.bgc};
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

  @media (max-width: ${sm}) {
    padding-left: 0;
  }

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

export {
  Navbar,
  Menubar,
  Banner,
  Background,
  ShortLinkSection,
  Error,
  EachLinkSection,
  StatisticsHeading,
  SubHeading,
  P,
  Button,
  Ul,
  RecognitionContainer,
  EachRecognitionStyle,
  BoostLinkSection,
  FooterContainer,
  FooterLogoPart,
  Footer,
  ExtraLogoSection,
};
