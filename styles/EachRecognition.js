import React from "react";
import Image from "next/image";
import recognition from "../Images/Assets/icon-brand-recognition.svg";

import { EachRecognitionStyle, P } from "./Components.styles";

const EachRecognition = () => {
  return (
    <EachRecognitionStyle>
      <div>
        <Image
          width={30}
          height={30}
          alt="Brand recognition"
          src={recognition}
        />
      </div>

      <p>Brand Recognition</p>
      <P size="small">
        Boost your brand recognation with each click. Generic links don&apos;t
        mean a thing. Branded links help instill confidence in your content.
      </P>
    </EachRecognitionStyle>
  );
};

export default EachRecognition;
