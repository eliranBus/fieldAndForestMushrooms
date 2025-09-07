import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import torrendia1 from "../../../assets/images/torrendia1.jpeg";
import torrendia2 from "../../../assets/images/torrendia2.jpeg";
import BackButton from "../../backButton";

const Torrendia = () => {
  return (
    <div className="inner-section" id="torrendia">
      <Helmet>
        <title>פטרידע - הפטריה טורנדיה נאה</title>
        <meta
          name="description"
          content="הפטריה טורנדיה נאה - Torrendia  pulchella: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="torrendia" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="torrendiaText1" />
          </p>
          <p>
            <MultiLingualContent contentID="torrendiaText2" />
          </p>
          <p>
            <MultiLingualContent contentID="torrendiaText3" />
          </p>
          <p>
            <MultiLingualContent contentID="torrendiaText4" />
          </p>
          <p>
            <MultiLingualContent contentID="torrendiaText5" />
          </p>
          <p>
            <MultiLingualContent contentID="torrendiaText6" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={torrendia1} alt="טורנדיה נאה" />
              <p>
                <MultiLingualContent contentID="torrendiaImg1" />
              </p>
            </div>
            <div className="imgWrapper">
              <LazyLoadImage src={torrendia2} alt="טורנדיה נאה" />
              <p>
                <MultiLingualContent contentID="torrendiaImg2" />
              </p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Torrendia;
