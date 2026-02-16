import React from "react";
import { Helmet } from "react-helmet";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import BackButton from "../../backButton";
import { LazyLoadImage } from "react-lazy-load-image-component";
import cordyceps from "../../../assets/images/cordyceps.jpeg";

const Substances = () => {
  return (
    <div className="inner-section" id="substances">
      <Helmet>
        <title>פטרידע - מהם החומרים ודרך השפעתם ברפואה</title>
        <meta name="description" />
      </Helmet>
      <BackButton path="/#information" />
      <h2>
        <MultiLingualContent contentID="substances" />
      </h2>
      <h3>
        <MultiLingualContent contentID="substancesText0" />
      </h3>
      <p>
        <MultiLingualContent contentID="substancesText1" />
      </p>
      <br />
      <p>
        <MultiLingualContent contentID="substancesText2" />
      </p>
      <br />
      <p>
        <MultiLingualContent contentID="substancesText3" />
      </p>
      <br />
      <a
        href="https://www.facebook.com/mycolivia.il"
        target="_blank"
        rel="noreferrer"
      >
        קישור לדף הפייסבוק של חברת מיקוליביה
      </a>{" "}
      <div className="informationImages">
        <div className="imgWrapper">
          <LazyLoadImage src={cordyceps} alt="קורדיספס" />
        </div>
      </div>
    </div>
  );
};

export default Substances;
