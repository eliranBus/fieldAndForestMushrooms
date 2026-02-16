import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import BackButton from "../../backButton";
import lavkanit1 from "../../../assets/images/lavkanit1.jpeg";
import lavkanit10 from "../../../assets/images/lavkanit10.jpeg";
import lavkanit11 from "../../../assets/images/lavkanit11.jpeg";
import lavkanit12 from "../../../assets/images/lavkanit12.jpeg";
import lavkanit13 from "../../../assets/images/lavkanit13.jpeg";

const Lavkanit = () => {
  return (
    <div className="inner-section" id="lavkanit">
      <Helmet>
        <title>פטרידע - הפטריה לבקנית</title>
        <meta
          name="description"
          content="הפטריה לבקנית - Leucoagaricus: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="lavkanit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="lavkanitText1" />
          </p>
          <p>
            <MultiLingualContent contentID="lavkanitText2" />
          </p>
          <p>
            <MultiLingualContent contentID="lavkanitText3" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="lavkanitText4Bold" />
            </b>
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="lavkanitText5" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="lavkanitText6Bold" />
            </b>
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="lavkanitText7" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="lavkanitText8Bold" />
            </b>
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="lavkanitText9" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="lavkanitText10Bold" />
            </b>
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="lavkanitText11" />
          </p>
          <br />
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={lavkanit1} alt="להבית" />
            <p>
              <MultiLingualContent contentID="lavkanitImg1" />
            </p>
          </div>
        </div>
        <br />
        <p>
          <b>
            <MultiLingualContent contentID="lavkanitText13Bold" />
          </b>
        </p>
        <p>
          <MultiLingualContent contentID="lavkanitText15" />
        </p>
        <p>
          <MultiLingualContent contentID="lavkanitText16" />
        </p>
        <p>
          <MultiLingualContent contentID="lavkanitText17" />
        </p>
        <p>
          <MultiLingualContent contentID="lavkanitText18" />
        </p>
        <p>
          <MultiLingualContent contentID="lavkanitText19" />
        </p>
        <p>
          <MultiLingualContent contentID="lavkanitText20" />
        </p>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={lavkanit10} alt="לבקנית" />
            <p>
              <MultiLingualContent contentID="lavkanitImg10" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage src={lavkanit11} alt="לבקנית" />
            <p>
              <MultiLingualContent contentID="lavkanitImg11" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage src={lavkanit12} alt="לבקנית" />
            <p>
              <MultiLingualContent contentID="lavkanitImg12" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage src={lavkanit13} alt="לבקנית" />
            <p>
              <MultiLingualContent contentID="lavkanitImg13" />
            </p>
          </div>
        </div>
        <br />
        <br />
        <p>
          <b>
            <MultiLingualContent contentID="lavkanitText12Bold" />
          </b>
        </p>
        <ul>
          <li>
            <MultiLingualContent contentID="lavkanitText14Bullet" />
          </li>
          <li>
            <MultiLingualContent contentID="lavkanitText15Bullet" />
          </li>
          <li>
            <MultiLingualContent contentID="lavkanitText16Bullet" />
          </li>
        </ul>
      </>
    </div>
  );
};

export default Lavkanit;
