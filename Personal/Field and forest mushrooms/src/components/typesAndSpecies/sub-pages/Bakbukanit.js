import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import BackButton from "../../backButton";
import bakbukanit1 from "../../../assets/images/bakbukanit1.jpeg";

const Bakbukanit = () => {
  return (
    <div className="inner-section" id="bakbukanit">
      <Helmet>
        <title>פטרידע - הפטריה בקבוקנית</title>
        <meta
          name="description"
          content="הפטריה בקבוקנית - Pilobolus: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="bakbukanit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="bakbukanitText1" />
          </p>
          <p>
            <MultiLingualContent contentID="bakbukanitText2" />
          </p>
          <p>
            <MultiLingualContent contentID="bakbukanitText3" />
          </p>
          <p>
            <MultiLingualContent contentID="bakbukanitText4" />
          </p>
          <p>
            <MultiLingualContent contentID="bakbukanitText5" />
          </p>
          <br />
          <br />
          <a
            href="https://en.m.wikipedia.org/wiki/Pilobolus"
            target="_blank"
            rel="noreferrer"
          >
            <MultiLingualContent contentID="bakbukanitText6" />
          </a>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={bakbukanit1} alt="בקבוקנית" />
            <p>
              <MultiLingualContent contentID="bakbukanitImg1" />
            </p>
          </div>
        </div>
        <br />
      </>
    </div>
  );
};

export default Bakbukanit;
