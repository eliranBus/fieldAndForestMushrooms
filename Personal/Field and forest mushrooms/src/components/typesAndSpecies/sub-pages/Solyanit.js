import React from "react";
import { Helmet } from "react-helmet";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import BackButton from "../../backButton";
import solyanit1 from "../../../assets/images/solyanit1.jpeg";
import solyanit2 from "../../../assets/images/solyanit2.jpeg";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Solyanit = () => {
  return (
    <div className="inner-section" id="solyanit">
      <Helmet>
        <title>פטרידע - הפטריה שרועית</title>
        <meta
          name="description"
          content="הפטריה סוליינית - Coriolopsis: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="solyanit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="solyanitText1" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="solyanitText2" />
          </p>
          <p>
            <MultiLingualContent contentID="solyanitText3" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="solyanitText4Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="solyanitText5" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={solyanit1} alt="סוליינית" />
              <p>
                <MultiLingualContent contentID="solyanitTextImg1" />
              </p>
            </div>
            <div className="imgWrapper">
              <LazyLoadImage src={solyanit2} alt="סוליינית" />
              <p>
                <MultiLingualContent contentID="solyanitTextImg1" />
              </p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Solyanit;
