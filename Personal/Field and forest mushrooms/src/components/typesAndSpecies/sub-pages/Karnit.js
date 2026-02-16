import React from "react";
import { Helmet } from "react-helmet";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import BackButton from "../../backButton";
import karnit1 from "../../../assets/images/karnit1.jpeg";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Karnit = () => {
  return (
    <div className="inner-section" id="karnit">
      <Helmet>
        <title>פטרידע - הפטריה קרנית</title>
        <meta
          name="description"
          content="הפטריה קרנית - Calocera: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="karnit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="karnitText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="karnitText2" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="karnitText3Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="karnitText4" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={karnit1} alt="קרנית" />
              <p>
                <MultiLingualContent contentID="karnitImg1" />
              </p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Karnit;
