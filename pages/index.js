import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import people from "../Images/Assets/people working.png";
import logo from "../Images/Assets/logo.svg";
import logo2 from "../Images/Assets/logo_white.svg";
import menu from "../Images/Assets/menu bar.svg";
import facebook from "../Images/Assets/icon-facebook.svg";
import twitter from "../Images/Assets/icon-twitter.svg";
import pinterest from "../Images/Assets/icon-pinterest.svg";
import instagram from "../Images/Assets/icon-instagram.svg";
import theme from "../styles/theme";
import {
  Background,
  Banner,
  BoostLinkSection,
  Button,
  EachLinkSection,
  Error,
  ExtraLogoSection,
  Footer,
  FooterContainer,
  FooterLogoPart,
  Menubar,
  Navbar,
  P,
  RecognitionContainer,
  ShortLinkSection,
  StatisticsHeading,
  SubHeading,
  Ul,
} from "../styles/Components.styles";
import EachRecognition from "../styles/EachRecognition";
import { useState } from "react";

export default function Home() {
  const [linkDetails, setLinkDetails] = useState({});

  const shortenHandler = async (e) => {
    e.preventDefault();
    const userLink = await e.target.link.value;
    const url = `https://api.shrtco.de/v2/shorten?url=${await userLink}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setLinkDetails(data);
      });
  };

  const copyHandler = () => {
    const range = document.createRange();
    range.selectNode(document.getElementById("short"));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
    document.execCommand("copy");
    document.getElementById("copy").innerText = "Copied";
    document.getElementById(
      "copy"
    ).style.backgroundColor = `${theme.colors.neutral.veryDarkBlue}`;
  };

  return (
    <div>
      <Head>
        <title>Shortly</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar>
        <div>
          <Image width={85} height={25} alt="logo" src={logo} />
        </div>
        <ul>
          <Link href="">
            <a>
              <li>Features</li>
            </a>
          </Link>
          <Link href="">
            <a>
              <li>Pricing</li>
            </a>
          </Link>
          <Link href="">
            <a>
              <li>Resources</li>
            </a>
          </Link>
        </ul>
        <Menubar>
          <Image width={50} height={28} alt="menu bar" src={menu} />
        </Menubar>
      </Navbar>

      <Banner>
        <p>
          MORE THAN JUST <br />
          SHORTER LINKS
        </p>
        <Image
          width={270}
          height={270}
          alt="peoples are working"
          src={people}
        />
      </Banner>

      <Background>
        <ShortLinkSection>
          <form onSubmit={shortenHandler}>
            <input
              placeholder="Shorten a link here..."
              type="text"
              name="link"
            />
            <Button p="10px 30px" round="5px" bgc={theme.colors.primary.cyan}>
              Shorten it!
            </Button>
          </form>
          <div>
            {linkDetails.ok ? (
              <EachLinkSection>
                <p>{linkDetails.result.original_link}</p>
                <div>
                  <p id="short">{linkDetails.result.full_short_link}</p>
                  <Button
                    id="copy"
                    p="7px 25px"
                    round="5px"
                    bgc={theme.colors.primary.cyan}
                    onClick={copyHandler}
                  >
                    Copy
                  </Button>
                </div>
              </EachLinkSection>
            ) : (
              <Error>{linkDetails.error}</Error>
            )}
          </div>
        </ShortLinkSection>

        <StatisticsHeading>
          <p>Advanced Statistics</p>
        </StatisticsHeading>

        <SubHeading>
          <P>
            Track how your links are performing across the web with <br /> our
            advanced statistics dashboard.
          </P>
        </SubHeading>

        <RecognitionContainer>
          <EachRecognition />
          <EachRecognition />
          <EachRecognition />
        </RecognitionContainer>

        <BoostLinkSection>
          <div>
            <p>Boost your links today</p>
            <Button p="12px 30px" round="50px" bgc={theme.colors.primary.cyan}>
              Get Started
            </Button>
          </div>
        </BoostLinkSection>
      </Background>

      <FooterContainer>
        <Footer>
          <FooterLogoPart>
            <section>
              <Image width={85} height={25} alt="Logo" src={logo2} />
              <section>
                <Link href="">
                  <a>
                    <Image
                      width={18}
                      height={17}
                      alt="Facebook"
                      src={facebook}
                    />
                  </a>
                </Link>
                <Link href="">
                  <a>
                    <Image width={18} height={17} alt="Twitter" src={twitter} />
                  </a>
                </Link>
                <Link href="">
                  <a>
                    <Image
                      width={18}
                      height={17}
                      alt="Pinterest"
                      src={pinterest}
                    />
                  </a>
                </Link>
                <Link href="">
                  <a>
                    <Image
                      width={18}
                      height={17}
                      alt="Instagram"
                      src={instagram}
                    />
                  </a>
                </Link>
              </section>
            </section>
          </FooterLogoPart>
          <div>
            <Ul>
              <p>Features</p>
              <li>Link Shortening</li>
              <li>Branded Links</li>
              <li>Analytics</li>
            </Ul>
            <Ul>
              <p>Resources</p>
              <li>Blog</li>
              <li>Developers</li>
              <li>Support</li>
            </Ul>
            <Ul>
              <p>Company</p>
              <li>About</li>
              <li>Our team</li>
              <li>Careers</li>
              <li>Contact</li>
            </Ul>
          </div>
        </Footer>
        <ExtraLogoSection>
          <Link href="">
            <a>
              <Image width={18} height={17} alt="Facebook" src={facebook} />
            </a>
          </Link>
          <Link href="">
            <a>
              <Image width={18} height={17} alt="Twitter" src={twitter} />
            </a>
          </Link>
          <Link href="">
            <a>
              <Image width={18} height={17} alt="Pinterest" src={pinterest} />
            </a>
          </Link>
          <Link href="">
            <a>
              <Image width={18} height={17} alt="Instagram" src={instagram} />
            </a>
          </Link>
        </ExtraLogoSection>
      </FooterContainer>
    </div>
  );
}
