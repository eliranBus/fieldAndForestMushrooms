import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import seirit1 from "../../../assets/images/seirit1.jpg";
import seirit2 from "../../../assets/images/seirit2.jpg";
import BackButton from "../../backButton";

const Seirit = () => {
  return (
    <div className="inner-section" id="seirit">
      <Helmet>
        <title>פטרידע - הפטריה שעירית</title>
        <meta
          name="description"
          content="הפטריה שעירית - Tricholomella constricta: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="seirit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="seiritText1" />
          </p>
          <p>
            <MultiLingualContent contentID="seiritText2" />
          </p>
          <p>
            <MultiLingualContent contentID="seiritText3" />
          </p>
          <p>
            <MultiLingualContent contentID="seiritText4" />
          </p>
          <br />
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={seirit1} alt="שעירית" />
              <p>
                <MultiLingualContent contentID="seiritImg1" />
              </p>
            </div>
            <div className="imgWrapper">
              <LazyLoadImage src={seirit2} alt="שעירית" />
              <p>
                <MultiLingualContent contentID="seiritImg2" />
              </p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Seirit;
