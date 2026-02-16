import React from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import table from "../../../assets/type-tables/הסוג הינומה.xls";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import hinoma1 from "../../../assets/images/hinoma1.jpg";
import hinoma2 from "../../../assets/images/hinoma2.jpg";
import hinoma3 from "../../../assets/images/hinoma3.jpg";
import hinoma4 from "../../../assets/images/hinoma4.jpg";
import hinoma5 from "../../../assets/images/hinoma5.jpg";
import hinoma6 from "../../../assets/images/hinoma6.jpg";
import hinoma7 from "../../../assets/images/hinoma7.jpg";
import hinoma8 from "../../../assets/images/hinoma8.jpg";
import hinoma10 from "../../../assets/images/hinoma10.jpeg";
import hinoma11 from "../../../assets/images/hinoma11.jpeg";
import hinoma12 from "../../../assets/images/hinoma12.jpeg";
import BackButton from "../../backButton";

const Hinoma = () => {
  return (
    <div className="inner-section" id="hinoma">
      <Helmet>
        <title>פטרידע - הפטריה הינומה</title>
        <meta
          name="description"
          content="הפטריה הינומה - Cortinarius: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="hinoma" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="hinomaText1" />
          </p>
          <p>
            <MultiLingualContent contentID="hinomaText2" />
          </p>
          <p>
            <MultiLingualContent contentID="hinomaText3" />
          </p>
          <p>
            <MultiLingualContent contentID="hinomaText4" />
          </p>
          <p>
            <MultiLingualContent contentID="hinomaText5" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="hinomaText51" />
          </p>
          <p>
            <b>
              <MultiLingualContent contentID="hinomaText52" />
            </b>
            <MultiLingualContent contentID="hinomaText521" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={hinoma10} alt="הינומה" />
              <p>
                <MultiLingualContent contentID="hinoma52Img" />
              </p>
            </div>
          </div>
          <p>
            <b>
              <MultiLingualContent contentID="hinomaText53" />
            </b>
            <MultiLingualContent contentID="hinomaText531" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={hinoma11} alt="הינומה" />
              <p>
                <MultiLingualContent contentID="hinoma53Img" />
              </p>
            </div>
          </div>
          <p>
            <b>
              <MultiLingualContent contentID="hinomaText54" />
            </b>
            <MultiLingualContent contentID="hinomaText541" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage src={hinoma12} alt="הינומה" />
              <p>
                <MultiLingualContent contentID="hinoma54Img" />
              </p>
            </div>
          </div>
          <br />
          <p>
            <MultiLingualContent contentID="shcharcharitText7" />
            <div className="typeTable">
              <Link to={table} target="_blank" download>
                <MultiLingualContent contentID="hinomaTableDownload" />
              </Link>
            </div>
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={hinoma1} alt="הינומה" />
            <p>
              <MultiLingualContent contentID="hinomaImg1" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage src={hinoma2} alt="הינומה" />
            <p>
              <MultiLingualContent contentID="hinomaImg2" />
            </p>
          </div>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={hinoma3} alt="הינומה" />
            <p>
              <MultiLingualContent contentID="hinomaImg3" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage src={hinoma4} alt="הינומה" />
            <p>
              <MultiLingualContent contentID="hinomaImg4" />
            </p>
          </div>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={hinoma5} alt="הינומה" />
            <p>
              <MultiLingualContent contentID="hinomaImg5" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage src={hinoma6} alt="הינומה" />
            <p>
              <MultiLingualContent contentID="hinomaImg6" />
            </p>
          </div>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={hinoma7} alt="הינומה" />
            <p>
              <MultiLingualContent contentID="hinomaImg7" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage src={hinoma8} alt="הינומה" />
            <p>
              <MultiLingualContent contentID="hinomaImg8" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Hinoma;
