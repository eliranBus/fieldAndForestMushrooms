import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import panachit1 from "../../../assets/images/panachit1.jpeg";
import BackButton from "../../backButton";

const Panachit = () => {
  return (
    <div className="inner-section" id="panachit">
      <Helmet>
        <title>פטרידע - הפטריה פנכית</title>
        <meta
          name="description"
          content="הפטריה פנכית - Pulvinula / Barlaea: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="panachit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="panachitText1" />
          </p>
          <p>
            <MultiLingualContent contentID="panachitText2" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="panachitText3Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="panachitText4" />
          </p>
          <p>
            <MultiLingualContent contentID="panachitText5" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={panachit1} alt="פנכית" />
              <p>
                <MultiLingualContent contentID="panachitImg1" />
              </p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Panachit;
