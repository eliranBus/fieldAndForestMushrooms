import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import doranit1 from "../../../assets/images/doranit1.jpeg";
import doranit2 from "../../../assets/images/doranit2.jpeg";
import BackButton from "../../backButton";

const Doranit = () => {
  return (
    <div className="inner-section" id="doranit">
      <Helmet>
        <title>פטרידע - הפטריה דורנית</title>
        <meta
          name="description"
          content="הפטריה דורנית - Mycenastrum: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="doranit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="doranitText1" />
          </p>
          <p>
            <MultiLingualContent contentID="doranitText2" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="doranitText3Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="doranitText4" />
          </p>
          <p>
            <MultiLingualContent contentID="doranitText5" />
          </p>
          <p>
            <MultiLingualContent contentID="doranitText6" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={doranit1} alt="דורנית" />
              <p>
                <MultiLingualContent contentID="doranitImg1" />
              </p>
            </div>
            <div className="imgWrapper">
              <LazyLoadImage src={doranit2} alt="דורנית" />
              <p>
                <MultiLingualContent contentID="doranitImg2" />
              </p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Doranit;
