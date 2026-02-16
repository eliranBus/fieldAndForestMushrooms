import React from "react";
import { Helmet } from "react-helmet";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import BackButton from "../../backButton";
import sruit5 from "../../../assets/images/sruit5.jpeg";
import sruit2 from "../../../assets/images/sruit2.jpeg";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Sruit = () => {
  return (
    <div className="inner-section" id="sruit">
      <Helmet>
        <title>פטרידע - הפטריה שרועית</title>
        <meta
          name="description"
          content="הפטריה שרועית - Paxillus /Tapinella: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="sruit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="sruitText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="sruitText2" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="sruitText3Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="sruitText4" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="sruitText5" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={sruit5} alt="שרועית" />
              <p>
                <MultiLingualContent contentID="sruitImg5" />
              </p>
            </div>
            <div className="imgWrapper">
              <LazyLoadImage src={sruit2} alt="שרועית" />
              <p>
                <MultiLingualContent contentID="sruitImg2" />
              </p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Sruit;
