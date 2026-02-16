import React from "react";
import { Helmet } from "react-helmet";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import BackButton from "../../backButton";
import psifasit1 from "../../../assets/images/psifasit1.jpeg";
import psifasit2 from "../../../assets/images/psifasit2.jpeg";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Psifasit = () => {
  return (
    <div className="inner-section" id="psifasit">
      <Helmet>
        <title>פטרידע - הפטריה פסיפסית</title>
        <meta
          name="description"
          content="הפטריה פסיפסית - Pisolithus: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="psifasit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="psifasitText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="psifasitText2" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="psifasitText3Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="psifasitText4" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="psifasitText5" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={psifasit1} alt="פסיפסית" />
              <p>
                <MultiLingualContent contentID="psifasitImg1" />
              </p>
            </div>
            <div className="imgWrapper">
              <LazyLoadImage src={psifasit2} alt="פסיפסית" />
              <p>
                <MultiLingualContent contentID="psifasitImg2" />
              </p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Psifasit;
