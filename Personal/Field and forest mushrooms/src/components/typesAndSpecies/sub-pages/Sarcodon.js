import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import sarcodon1 from "../../../assets/images/sarcodon1.jpeg";
import BackButton from "../../backButton";

const Sarcodon = () => {
  return (
    <div className="inner-section" id="sarcodon">
      <Helmet>
        <title>פטרידע - הפטריה סרקודון</title>
        <meta
          name="description"
          content="הפטריה סרקודון - Sarcodon: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="sarcodon" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="sarcodonText1" />
          </p>
          <p>
            <MultiLingualContent contentID="sarcodonText2" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="sarcodonText3Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="sarcodonText4" />
          </p>
          <p>
            <MultiLingualContent contentID="sarcodonText5" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={sarcodon1} alt="סרקודון" />
              <p>
                <MultiLingualContent contentID="sarcodonImg1" />
              </p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Sarcodon;
