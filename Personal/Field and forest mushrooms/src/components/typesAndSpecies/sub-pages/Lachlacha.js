import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import lachlacha1 from "../../../assets/images/lachlacha1.jpeg";
import lachlacha2 from "../../../assets/images/lachlacha2.jpeg";
import lachlacha3 from "../../../assets/images/lachlacha3.jpeg";
import lachlacha4 from "../../../assets/images/lachlacha4.jpeg";
import lachlacha5 from "../../../assets/images/lachlacha5.jpeg";
import lachlacha6 from "../../../assets/images/lachlacha6.jpeg";
import lachlacha7 from "../../../assets/images/lachlacha7.jpeg";
import lachlacha8 from "../../../assets/images/lachlacha8.jpeg";
import BackButton from "../../backButton";

const Lachlacha = () => {
  return (
    <div className="inner-section" id="lachlacha">
      <Helmet>
        <title>פטרידע - הפטריה לחלחה</title>
        <meta
          name="description"
          content="הפטריה לחלחה - Hygrophorus: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="lachlacha" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="lachlachaText1" />
          </p>
          <p>
            <MultiLingualContent contentID="lachlachaText2" />
          </p>
          <p>
            <MultiLingualContent contentID="lachlachaText3" />
          </p>
          <p>
            <MultiLingualContent contentID="lachlachaText4" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="lachlachaText5Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="lachlachaText6" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={lachlacha1} alt="לחלחה" />
              <p>
                <MultiLingualContent contentID="lachlachaImg1" />
              </p>
            </div>
            <div className="imgWrapper">
              <LazyLoadImage src={lachlacha2} alt="לחלחה" />
              <p>
                <MultiLingualContent contentID="lachlachaImg2" />
              </p>
            </div>
          </div>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="lachlachaText7Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="lachlachaText8" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={lachlacha3} alt="לחלחה" />
              <p>
                <MultiLingualContent contentID="lachlachaImg3" />
              </p>
            </div>
          </div>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="lachlachaText9Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="lachlachaText10" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={lachlacha4} alt="לחלחה" />
              <p>
                <MultiLingualContent contentID="lachlachaImg4" />
              </p>
            </div>
          </div>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="lachlachaText11Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="lachlachaText12" />
          </p>
          <p>
            <MultiLingualContent contentID="lachlachaText13" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={lachlacha5} alt="לחלחה" />
              <p>
                <MultiLingualContent contentID="lachlachaImg5" />
              </p>
            </div>
            <div className="imgWrapper">
              <LazyLoadImage
                src={lachlacha6}
                alt="לחלחה"
                className="imgRotate"
              />
              <p>
                <MultiLingualContent contentID="lachlachaImg6" />
              </p>
            </div>
          </div>
          <br />
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="lachlachaText14Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="lachlachaText15" />
          </p>
          <p>
            <MultiLingualContent contentID="lachlachaText16" />
          </p>
          <p>
            <MultiLingualContent contentID="lachlachaText17" />
          </p>
          <p>
            <MultiLingualContent contentID="lachlachaText18" />
          </p>
          <p>
            <MultiLingualContent contentID="lachlachaText19" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={lachlacha7} alt="לחלחה" />
              <p>
                <MultiLingualContent contentID="lachlachaImg7" />
              </p>
            </div>
          </div>
          <p>
            <MultiLingualContent contentID="lachlachaText20" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={lachlacha8} alt="לחלחה" />
              <p>
                <MultiLingualContent contentID="lachlachaImg8" />
              </p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default Lachlacha;
