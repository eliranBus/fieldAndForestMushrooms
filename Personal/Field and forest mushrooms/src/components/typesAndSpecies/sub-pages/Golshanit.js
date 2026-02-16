import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import BackButton from "../../backButton";
import golshanit1 from "../../../assets/images/golshanit1.jpeg";
import golshanit2 from "../../../assets/images/golshanit2.jpeg";

const Golshanit = () => {
  return (
    <div className="inner-section" id="golshanit">
      <Helmet>
        <title>פטרידע - הפטריה גולשנית</title>
        <meta
          name="description"
          content="הפטריה גולשנית - Rhodocybe / Lulesia: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="golshanit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="golshanitText1" />
          </p>
          <p>
            <MultiLingualContent contentID="golshanitText2" />
          </p>
          <p>
            <MultiLingualContent contentID="golshanitText3" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="golshanitText4Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="golshanitText5" />
          </p>
          <p>
            <MultiLingualContent contentID="golshanitText6" />
          </p>
          <p>
            <MultiLingualContent contentID="golshanitText7" />
          </p>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={golshanit1} alt="גולשנית" />
            <p>
              <MultiLingualContent contentID="golshanitImg1" />
            </p>
          </div>
        </div>
        <br />
        <p>
          <b>
            <MultiLingualContent contentID="golshanitText8Bold" />
          </b>
        </p>
        <p>
          <MultiLingualContent contentID="golshanitText9" />
        </p>
        <p>
          <MultiLingualContent contentID="golshanitText10" />
        </p>
        <p>
          <MultiLingualContent contentID="golshanitText11" />
        </p>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={golshanit2} alt="גולשנית" />
            <p>
              <MultiLingualContent contentID="golshanitImg2" />
            </p>
          </div>
        </div>
        <p>
          <b>
            <MultiLingualContent contentID="golshanitText12Bold" />
          </b>
        </p>
        <p>
          <MultiLingualContent contentID="golshanitText13" />
        </p>
        <p>
          <MultiLingualContent contentID="golshanitText14" />
        </p>
        <br></br>
        <br></br>
        <p>
          <MultiLingualContent contentID="golshanitText15" />
        </p>
        <p>
          <MultiLingualContent contentID="golshanitText16" />
        </p>
        <p>
          <MultiLingualContent contentID="golshanitText17" />
        </p>
        <p>
          <MultiLingualContent contentID="golshanitText18" />
        </p>
        <br />
        <br />
        <a
          href="https://www.researchgate.net/publication/311534046_Two_new_Rhodocybe_species_sect_Rufobrunnea_Entolomataceae_from_the_East_Black_Sea_coast_of_Turkey"
          target="_blank"
        >
          <MultiLingualContent contentID="golshanitArticle" />
        </a>
      </>
    </div>
  );
};

export default Golshanit;
