import React from "react";
import { Helmet } from "react-helmet";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import BackButton from "../../backButton";
import parasiticPlantsOnFungi1 from "../../../assets/images/parasiticPlantsOnFungi1.jpeg";
import parasiticPlantsOnFungi2 from "../../../assets/images/parasiticPlantsOnFungi2.jpeg";
import parasiticPlantsOnFungi3 from "../../../assets/images/parasiticPlantsOnFungi3.jpeg";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ParasiticPlantsOnFungi = () => {
  return (
    <div className="inner-section" id="parasiticPlantsOnFungi">
      <Helmet>
        <title>פטרידע - צמחים טפילים על פטריות</title>
        <meta name="description" />
      </Helmet>
      <BackButton path="/#information" />
      <h2>
        <MultiLingualContent contentID="parasiticPlantsOnFungi" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="parasiticPlantsOnFungiText1" />
          </p>
          <p>
            <MultiLingualContent contentID="parasiticPlantsOnFungiText2" />
          </p>
          <p>
            <MultiLingualContent contentID="parasiticPlantsOnFungiText3" />
          </p>
          <br />
          <p>
            <MultiLingualContent contentID="parasiticPlantsOnFungiText4" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="parasiticPlantsOnFungiTextList1" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="parasiticPlantsOnFungiTextList1Text1" />
          </p>
          <p>
            <MultiLingualContent contentID="parasiticPlantsOnFungiTextList1Text2" />
          </p>
          <p>
            <MultiLingualContent contentID="parasiticPlantsOnFungiTextList1Text3" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage
                src={parasiticPlantsOnFungi1}
                alt="parasiticPlantsOnFungi"
              />
              <p>
                <MultiLingualContent contentID="parasiticImg1" />
              </p>
            </div>
            <div className="imgWrapper">
              <LazyLoadImage
                src={parasiticPlantsOnFungi2}
                alt="parasiticPlantsOnFungi"
              />
              <p>
                <MultiLingualContent contentID="parasiticImg2" />
              </p>
            </div>
          </div>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="parasiticPlantsOnFungiTextList2" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="parasiticPlantsOnFungiTextList2Text1" />
          </p>
          <p>
            <MultiLingualContent contentID="parasiticPlantsOnFungiTextList2Text2" />
          </p>
          <div className="informationImages">
            <div className="imgWrapper">
              <LazyLoadImage
                src={parasiticPlantsOnFungi3}
                alt="parasiticPlantsOnFungi"
              />
              <p>
                <MultiLingualContent contentID="parasiticImg3" />
              </p>
            </div>
          </div>
          <br />
          <br />
          <p>
            <MultiLingualContent contentID="parasiticPlantsOnFungiText6" />
          </p>
          <p>
            <a
              href="https://www.first-nature.com/flowers/epipogium-aphyllum.php"
              target="_blank"
              rel="noreferrer"
            >
              <MultiLingualContent contentID="parasiticPlantsOnFungiArticle1" />
            </a>
          </p>
          <p>
            <a
              href="https://en.wikipedia.org/wiki/Epipogium_aphyllum"
              target="_blank"
              rel="noreferrer"
            >
              <MultiLingualContent contentID="parasiticPlantsOnFungiArticle2" />
            </a>
          </p>
        </div>
      </>
    </div>
  );
};

export default ParasiticPlantsOnFungi;
