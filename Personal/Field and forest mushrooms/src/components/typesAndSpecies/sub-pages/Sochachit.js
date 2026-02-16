import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import sochachit1 from "../../../assets/images/sochachit1.jpeg";
import sochachit2 from "../../../assets/images/sochachit2.jpeg";
import sochachit3 from "../../../assets/images/sochachit3.jpeg";
import sochachit4 from "../../../assets/images/sochachit4.jpeg";
import BackButton from "../../backButton";

const Sochachit = () => {
  return (
    <div className="inner-section" id="sochachit">
      <Helmet>
        <title>פטרידע - הפטריה סוככית</title>
        <meta
          name="description"
          content="הפטריה סוככית - Tubaria: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="sochachit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="sochachitText1" />
          </p>
          <p>
            <MultiLingualContent contentID="sochachitText2" />
          </p>
          <p>
            <MultiLingualContent contentID="sochachitText3" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="sochachitText4Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="sochachitText5" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={sochachit1} alt="סוככית" />
              <p>
                <MultiLingualContent contentID="sochachitImg1" />
              </p>
            </div>
          </div>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="sochachitText6Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="sochachitText7" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={sochachit2} alt="סוככית" />
              <p>
                <MultiLingualContent contentID="sochachitImg2" />
              </p>
            </div>
          </div>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="sochachitText8Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="sochachitText9" />
          </p>
          <p>
            <MultiLingualContent contentID="sochachitText10" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={sochachit3} alt="סוככית" />
              <p>
                <MultiLingualContent contentID="sochachitImg3" />
              </p>
            </div>
          </div>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="sochachitText11Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="sochachitText12" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="sochachitText13Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="sochachitText14" />
          </p>
          <p>
            <MultiLingualContent contentID="sochachitText15" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={sochachit4} alt="סוככית" />
              <p>
                <MultiLingualContent contentID="sochachitImg4" />
              </p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Sochachit;
