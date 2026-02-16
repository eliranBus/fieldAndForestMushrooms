import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import sidit1 from "../../../assets/images/sidit1.jpeg";
import sidit2 from "../../../assets/images/sidit2.jpeg";
import sidit3 from "../../../assets/images/sidit3.jpeg";
import sidit4 from "../../../assets/images/sidit4.jpeg";
import BackButton from "../../backButton";

const Sidit = () => {
  return (
    <div className="inner-section" id="sidit">
      <Helmet>
        <title>פטרידע - הפטריה סידית</title>
        <meta
          name="description"
          content="הפטריה סידית - Limacella: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="sidit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="siditText1" />
          </p>
          <p>
            <MultiLingualContent contentID="siditText2" />
          </p>
          <p>
            <MultiLingualContent contentID="siditText3" />
          </p>
          <p>
            <MultiLingualContent contentID="siditText5" />
          </p>
          <br />
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={sidit1} alt="סידית" />
              <p>
                <MultiLingualContent contentID="siditImg1" />
              </p>
            </div>
            <div className="imgWrapper">
              <LazyLoadImage src={sidit2} alt="סידית" />
              <p>
                <MultiLingualContent contentID="siditImg2" />
              </p>
            </div>
            <div className="imgWrapper">
              <LazyLoadImage src={sidit3} alt="סידית" />
              <p>
                <MultiLingualContent contentID="siditImg3" />
              </p>
            </div>
            <div className="imgWrapper">
              <LazyLoadImage src={sidit4} alt="סידית" />
              <p>
                <MultiLingualContent contentID="siditImg4" />
              </p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Sidit;
