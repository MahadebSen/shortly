import React from "react";
import theme from "./theme";
import { Button, EachLinkSection } from "./Components.styles";

const EachShortedLink = () => {
  return (
    <EachLinkSection>
      <p>https://www.frontendmentor.io</p>
      <div>
        <p>htt://rel.ink/k4lKyk</p>
        <Button p="7px 25px" round="5px" bgc={theme.colors.primary.cyan}>
          Copy
        </Button>
      </div>
    </EachLinkSection>
  );
};

export default EachShortedLink;
