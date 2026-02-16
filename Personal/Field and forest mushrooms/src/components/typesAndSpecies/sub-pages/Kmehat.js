import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import kmehat1 from "../../../assets/images/kmehat1.jpeg";
import kmehat2 from "../../../assets/images/kmehat2.jpeg";
import kmehat3 from "../../../assets/images/kmehat3.jpeg";
import kmehat4 from "../../../assets/images/kmehat4.jpeg";
import kmehat5 from "../../../assets/images/kmehat5.jpeg";
import kmehat6 from "../../../assets/images/kmehat6.jpeg";
import kmehat7 from "../../../assets/images/kmehat7.jpeg";
import article from "../../../assets/articles/כמהת יער.pdf";
import BackButton from "../../backButton";
import { Link } from "react-router-dom";

const Kmehat = () => {
  return (
    <div className="inner-section" id="kmehat">
      <Helmet>
        <title>פטרידע - הפטריה כמהת-יער</title>
        <meta
          name="description"
          content="הפטריה כמהת-יער - Tuber: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="kmehat" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="kmehatText1" />
          </p>
          <p>
            <MultiLingualContent contentID="kmehatText2" />
          </p>
          <p>
            <MultiLingualContent contentID="kmehatText3" />
          </p>
          <p>
            <MultiLingualContent contentID="kmehatText4" />
          </p>
          <p>
            <MultiLingualContent contentID="kmehatText5" />
          </p>
          <p>
            <MultiLingualContent contentID="kmehatText6" />
          </p>
          <p>
            <MultiLingualContent contentID="kmehatText7" />
          </p>
          <p>
            <MultiLingualContent contentID="kmehatText8" />
          </p>
          <p>
            <MultiLingualContent contentID="kmehatText9" />
          </p>
          <p>
            <MultiLingualContent contentID="kmehatText10" />
          </p>
          <p>
            <MultiLingualContent contentID="kmehatText11" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="kmehatText12Bold" />
            </b>
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="kmehatText13" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="kmehatText14" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="kmehatText15" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="kmehatText16" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="kmehatText17" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="kmehatText18" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="kmehatText19Bold" />
            </b>
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="kmehatText20" />
          </p>
          <p>
            <MultiLingualContent contentID="kmehatText21" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="kmehatText22" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="kmehatText23" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="kmehatText24" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="kmehatText25" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="kmehatText26" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="kmehatText27" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="kmehatText28" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="kmehatText29" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="kmehatText30" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="kmehatText31" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="kmehatText32" />
          </p>
          <p>
            <MultiLingualContent contentID="kmehatText33" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="kmehatText34Bold" />
            </b>
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="kmehatText35" />
          </p>
          <p>
            <MultiLingualContent contentID="kmehatText36" />
          </p>
          <p>
            <MultiLingualContent contentID="kmehatText37" />
          </p>
          <p>
            <MultiLingualContent contentID="kmehatText38" />
          </p>
          <p>
            <MultiLingualContent contentID="kmehatText39" />
          </p>
          <br />
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="kmehatText40Bold" />
            </b>
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={kmehat1} alt="כמהת יער" />
              <p>
                <MultiLingualContent contentID="kmehatImg1" />
              </p>
            </div>
            <div className="imgWrapper">
              <LazyLoadImage src={kmehat2} alt="כמהת יער" />
              <p>
                <MultiLingualContent contentID="kmehatImg2" />
              </p>
            </div>
            <div className="imgWrapper">
              <LazyLoadImage src={kmehat3} alt="כמהת יער" />
              <p>
                <MultiLingualContent contentID="kmehatImg3" />
              </p>
            </div>
          </div>
        </div>
        <br />
        <p>
          <b>
            <MultiLingualContent contentID="kmehatText41Bold" />
          </b>
        </p>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={kmehat4} alt="כמהת יער" />
            <p>
              <MultiLingualContent contentID="kmehatImg4" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage src={kmehat5} alt="כמהת יער" />
            <p>
              <MultiLingualContent contentID="kmehatImg5" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage src={kmehat6} alt="כמהת יער" />
            <p>
              <MultiLingualContent contentID="kmehatImg6" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage src={kmehat7} alt="כמהת יער" />
            <p>
              <MultiLingualContent contentID="kmehatImg7" />
            </p>
          </div>
        </div>
        <br />
        <p>
          <Link to={article} target="_blank" download>
            <MultiLingualContent contentID="kmehatText42" />
          </Link>{" "}
        </p>
      </>
    </div>
  );
};

export default Kmehat;
