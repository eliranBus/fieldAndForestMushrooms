import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import tzmudit1 from "../../../assets/images/tzmudit1.jpeg";
import tzmudit2 from "../../../assets/images/tzmudit2.jpeg";
import tzmudit3 from "../../../assets/images/tzmudit3.jpeg";
import BackButton from "../../backButton";

const Tzmudit = () => {
  return (
    <div className="inner-section" id="tzmudit">
      <Helmet>
        <title>פטרידע - הפטריה צמודית</title>
        <meta
          name="description"
          content="הפטריה צמודית - Fuscoporia: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="tzmudit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="tzmuditText1" />
          </p>
          <p>
            <MultiLingualContent contentID="tzmuditText2" />
          </p>
          <p>
            <MultiLingualContent contentID="tzmuditText3" />
          </p>
          <p>
            <MultiLingualContent contentID="tzmuditText4" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="tzmuditText5Bold" />
            </b>
          </p>
          <p>
            <b>
              <MultiLingualContent contentID="tzmuditText6Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="tzmuditText7" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={tzmudit1} alt="צמודית" />
            <p>
              <MultiLingualContent contentID="tzmuditImg1" />
            </p>
          </div>
        </div>
        <br />
        <div className="informationText">
          <p>
            <b>
              <MultiLingualContent contentID="tzmuditText8Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="tzmuditText9" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="tzmuditText10Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="tzmuditText11" />
          </p>
          <br />
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={tzmudit2} alt="צמודית" />
              <p>
                <MultiLingualContent contentID="tzmuditImg2" />
              </p>
            </div>
          </div>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="tzmuditText12Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="tzmuditText13" />
          </p>
          <p>
            <div className="informationImages">
              <div className="imgWrapper">
                <LazyLoadImage src={tzmudit3} alt="צמודית" />
                <p>
                  <MultiLingualContent contentID="tzmuditImg3" />
                </p>
              </div>
            </div>
            <MultiLingualContent contentID="tzmuditText14" />
          </p>
        </div>
      </>
    </div>
  );
};

export default Tzmudit;
