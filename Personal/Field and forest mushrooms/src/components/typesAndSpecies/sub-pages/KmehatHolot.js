import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import RachelEinav from "../../../assets/articles/רחל עינב.pdf";
import ElinoarShavit from "../../../assets/articles/תקציר של אלינוער שביט.pdf";
import YaronShitrit from "../../../assets/articles/כמהת השמשון-ירון שטרית.pdf";
import kmehatHolot1 from "../../../assets/images/holot1.jpeg";
import kmehatHolot2 from "../../../assets/images/holot2.jpeg";
import kmehatHolot3 from "../../../assets/images/holot3.jpeg";
import kmehatHolot4 from "../../../assets/images/holot4.jpeg";
import kmehatHolot5 from "../../../assets/images/holot5.jpeg";
import kmehatHolot6 from "../../../assets/images/holot6.jpeg";
import BackButton from "../../backButton";
import { Link } from "react-router-dom";

const KmehatHolot = () => {
  return (
    <div className="inner-section" id="kmehatHolot">
      <Helmet>
        <title>פטרידע - הפטריה כמהת-חולות</title>
        <meta
          name="description"
          content="הפטריה כמהת-חולות - Terfesia, Tirmania: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="kmehatHolot" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="kmehatHolotText1" />
          </p>
          <p>
            <MultiLingualContent contentID="kmehatHolotText2" />
          </p>
          <p>
            <MultiLingualContent contentID="kmehatHolotText3" />
          </p>
          <p>
            <MultiLingualContent contentID="kmehatHolotText4" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="kmehatHolotText5" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="kmehatHolotText6" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="kmehatHolotText7" />
          </p>
          <p>
            <MultiLingualContent contentID="kmehatHolotText8" />
          </p>
          <p>
            <MultiLingualContent contentID="kmehatHolotText9" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="kmehatHolotText10Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="kmehatHolotText11" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="kmehatHolotText12Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="kmehatHolotText13" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="kmehatHolotText14Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="kmehatHolotText15" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="kmehatHolotText16" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="kmehatHolotText17" />
          </p>
          <br />
          <p>
            <Link to={RachelEinav} target="_blank" download>
              <MultiLingualContent contentID="kmehatHolotLink1" />
            </Link>
          </p>
          <br />
          <p>
            <Link to={ElinoarShavit} target="_blank" download>
              <MultiLingualContent contentID="kmehatHolotLink2" />
            </Link>
          </p>
          <br />
          <p>
            <Link to={YaronShitrit} target="_blank" download>
              <MultiLingualContent contentID="kmehatHolotLink3" />
            </Link>
          </p>
          <br />
          <p>
            <a
              href="https://drive.google.com/file/d/1c0SeSiCxJm60ojR1hH0eJCcFoYCMkaN4/view?usp=drivesdk"
              target="_blank"
              rel="noreferrer"
            >
              <MultiLingualContent contentID="kmehatHolotLink4" />
            </a>
          </p>

          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={kmehatHolot1} alt="כמהת חולות" />
              <p>
                <MultiLingualContent contentID="kmehatHolotImg1" />
              </p>
            </div>
            <div className="imgWrapper">
              <LazyLoadImage src={kmehatHolot2} alt="כמהת חולות" />
              <p>
                <MultiLingualContent contentID="kmehatHolotImg2" />
              </p>
            </div>
            <div className="imgWrapper">
              <LazyLoadImage src={kmehatHolot3} alt="כמהת חולות" />
              <p>
                <MultiLingualContent contentID="kmehatHolotImg3" />
              </p>
            </div>
          </div>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={kmehatHolot4} alt="כמהת חולות" />
              <p>
                <MultiLingualContent contentID="kmehatHolotImg4" />
              </p>
            </div>
            <div className="imgWrapper">
              <LazyLoadImage src={kmehatHolot5} alt="כמהת חולות" />
              <p>
                <MultiLingualContent contentID="kmehatHolotImg5" />
              </p>
            </div>
            <div className="imgWrapper">
              <LazyLoadImage src={kmehatHolot6} alt="כמהת חולות" />
              <p>
                <MultiLingualContent contentID="kmehatHolotImg6" />
              </p>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default KmehatHolot;
