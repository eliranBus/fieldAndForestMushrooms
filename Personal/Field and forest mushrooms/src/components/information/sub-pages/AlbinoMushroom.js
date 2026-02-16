import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import albino from "../../../assets/images/albino.jpeg";
import albino1 from "../../../assets/images/albino1.jpeg";
import BackButton from "../../backButton";

const AlbinoMushroom = () => {
  return (
    <div className="inner-section" id="albinoMushroom">
      <Helmet>
        <title>פטרידע - פטריות לבקניות</title>
        <meta name="description" />
      </Helmet>
      <BackButton path="/#information" />
      <h2>
        <MultiLingualContent contentID="albinoMushroom" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="albinoMushroomText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="albinoMushroomText2" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="albinoMushroomText3" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="albinoMushroomText4" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="albinoMushroomText5" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage
                src={albino1}
                alt={<MultiLingualContent contentID="albinoMushroomImg1" />}
              />
              <p>
                <MultiLingualContent contentID="albinoMushroomImg1" />
              </p>
            </div>
            <div className="imgWrapper">
              <LazyLoadImage
                src={albino}
                alt={<MultiLingualContent contentID="albinoMushroomImg2" />}
              />
              <p>
                <MultiLingualContent contentID="albinoMushroomImg2" />
              </p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default AlbinoMushroom;
