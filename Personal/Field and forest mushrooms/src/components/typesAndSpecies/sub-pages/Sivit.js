import React from "react";
import { Helmet } from "react-helmet";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import sivit1 from "../../../assets/images/sivit1.jpeg";
import sivit2 from "../../../assets/images/sivit2.jpeg";
import sivit3 from "../../../assets/images/sivit3.jpeg";
import sivit4 from "../../../assets/images/sivit4.jpeg";
import sivit5 from "../../../assets/images/sivit5.jpeg";
import sivit6 from "../../../assets/images/sivit6.jpeg";
import sivit7 from "../../../assets/images/sivit7.jpeg";
import BackButton from "../../backButton";

const Sivit = () => {
  return (
    <div className="inner-section" id="sivit">
      <Helmet>
        <title>פטרידע - הפטריה סיבית</title>
        <meta
          name="description"
          content="הפטריה סיבית - Inocybe: תאור, זיהוי ותמונות"
        />
      </Helmet>
      <BackButton path="/#types-and-species" />
      <h2>
        <MultiLingualContent contentID="sivit" />
      </h2>
      <>
        <div className="informationText">
          <p>
            <MultiLingualContent contentID="sivitText1" />
          </p>
          <p>
            <MultiLingualContent contentID="sivitText2" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="sivitText3Bold" />
            </b>
            <MultiLingualContent contentID="sivitText4" />
          </p>
          <p>
            <b>
              <MultiLingualContent contentID="sivitText5Bold" />
            </b>
            <MultiLingualContent contentID="sivitText6" />
          </p>
          <p>
            <b>
              <MultiLingualContent contentID="sivitText7Bold" />
            </b>
            <MultiLingualContent contentID="sivitText8" />
          </p>
          <p>
            <b>
              <MultiLingualContent contentID="sivitText9Bold" />
            </b>
            <MultiLingualContent contentID="sivitText10" />
          </p>
          <p>
            <b>
              <MultiLingualContent contentID="sivitText11Bold" />
            </b>
            <MultiLingualContent contentID="sivitText12" />
          </p>
          <p>
            <b>
              <MultiLingualContent contentID="sivitText13Bold" />
            </b>
            <MultiLingualContent contentID="sivitText14" />
          </p>
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="sivitText15Bold" />
            </b>
          </p>
          <p>
            <MultiLingualContent contentID="sivitText16" />
          </p>
          <br />
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="sivitText17Bold" />
            </b>
          </p>
          <br />
          <table className="types-table">
            <tr>
              <td className="types-table-name">
                <b>
                  <MultiLingualContent contentID="sivitText18Right" />
                </b>
              </td>
              <td>
                <MultiLingualContent contentID="sivitText19Left" />
              </td>
            </tr>
            <tr>
              <td className="types-table-name">
                <b>
                  <MultiLingualContent contentID="sivitText20Right" />
                </b>
              </td>
              <td>
                <MultiLingualContent contentID="sivitText21Left" />
              </td>
            </tr>
            <tr>
              <td className="types-table-name">
                <b>
                  <MultiLingualContent contentID="sivitText22Right" />
                </b>
              </td>
              <td>
                <MultiLingualContent contentID="sivitText23Left" />
              </td>
            </tr>
          </table>
          <br />
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="sivitText24Bold" />
            </b>
          </p>
          <br />
          <table className="types-table">
            <tr>
              <td className="types-table-name">
                <b>
                  <MultiLingualContent contentID="sivitText25Right" />
                </b>
              </td>
              <td>
                <MultiLingualContent contentID="sivitText26Left" />
              </td>
            </tr>
            <tr>
              <td className="types-table-name">
                <b>
                  <MultiLingualContent contentID="sivitText27Right" />
                </b>
              </td>
              <td>
                <MultiLingualContent contentID="sivitText28Left" />
              </td>
            </tr>
            <tr>
              <td className="types-table-name">
                <b>
                  <MultiLingualContent contentID="sivitText29Right" />
                </b>
              </td>
              <td>
                <MultiLingualContent contentID="sivitText30Left" />
              </td>
            </tr>
            <tr>
              <td className="types-table-name">
                <b>
                  <MultiLingualContent contentID="sivitText31Right" />
                </b>
              </td>
              <td>
                <MultiLingualContent contentID="sivitText32Left" />
              </td>
            </tr>
            <tr>
              <td className="types-table-name">
                <b>
                  <MultiLingualContent contentID="sivitText33Right" />
                </b>
              </td>
              <td>
                <MultiLingualContent contentID="sivitText34Left" />
              </td>
            </tr>
            <tr>
              <td className="types-table-name">
                <b>
                  <MultiLingualContent contentID="sivitText35Right" />
                </b>
              </td>
              <td>
                <MultiLingualContent contentID="sivitText36Left" />
              </td>
            </tr>
            <tr>
              <td className="types-table-name">
                <b>
                  <MultiLingualContent contentID="sivitText37Right" />
                </b>
              </td>
              <td>
                <MultiLingualContent contentID="sivitText38Left" />
              </td>
            </tr>
            <tr>
              <td className="types-table-name">
                <b>
                  <MultiLingualContent contentID="sivitText39Right" />
                </b>
              </td>
              <td>
                <MultiLingualContent contentID="sivitText40Left" />
              </td>
            </tr>
            <tr>
              <td className="types-table-name">
                <b>
                  <MultiLingualContent contentID="sivitText41Right" />
                </b>
              </td>
              <td>
                <MultiLingualContent contentID="sivitText42Left" />
              </td>
            </tr>
            <tr>
              <td className="types-table-name">
                <b>
                  <MultiLingualContent contentID="sivitText43Right" />
                </b>
              </td>
              <td>
                <MultiLingualContent contentID="sivitText44Left" />
              </td>
            </tr>
          </table>
          <br />
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="sivitText45Bold" />
            </b>
          </p>
          <br />
          <table className="types-table">
            <tr>
              <td className="types-table-name">
                <b>
                  <MultiLingualContent contentID="sivitText46Right" />
                </b>
              </td>
              <td>
                <MultiLingualContent contentID="sivitText47Left" />
              </td>
            </tr>
            <tr>
              <td className="types-table-name">
                <b>
                  <MultiLingualContent contentID="sivitText48Right" />
                </b>
              </td>
              <td>
                <MultiLingualContent contentID="sivitText49Left" />
              </td>
            </tr>
            <tr>
              <td className="types-table-name">
                <b>
                  <MultiLingualContent contentID="sivitText50Right" />
                </b>
              </td>
              <td>
                <MultiLingualContent contentID="sivitText51Left" />
              </td>
            </tr>
            <tr>
              <td className="types-table-name">
                <b>
                  <MultiLingualContent contentID="sivitText52Right" />
                </b>
              </td>
              <td>
                <MultiLingualContent contentID="sivitText53Left" />
              </td>
            </tr>
          </table>
          <br />
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="sivitText54Bold" />
            </b>
          </p>
          <br />

          <table className="types-table">
            <tr>
              <td className="types-table-name">
                <b>
                  <MultiLingualContent contentID="sivitText55Right" />
                </b>
              </td>
              <td>
                <MultiLingualContent contentID="sivitText56Left" />
              </td>
            </tr>
          </table>
          <br />
          <br />
          <p>
            <b>
              <MultiLingualContent contentID="sivitText57Bold" />
            </b>
          </p>
          <br />

          <table className="types-table">
            <tr>
              <td className="types-table-name">
                <b>
                  <MultiLingualContent contentID="sivitText58Right" />
                </b>
              </td>
              <td>
                <MultiLingualContent contentID="sivitText59Left" />
              </td>
            </tr>
            <tr>
              <td className="types-table-name">
                <b>
                  <MultiLingualContent contentID="sivitText60Right" />
                </b>
              </td>
              <td>
                <MultiLingualContent contentID="sivitText61Left" />
              </td>
            </tr>
            <tr>
              <td className="types-table-name">
                <b>
                  <MultiLingualContent contentID="sivitText62Right" />
                </b>
              </td>
              <td>
                <MultiLingualContent contentID="sivitText63Left" />
              </td>
            </tr>
          </table>
        </div>
        <br />
        <br />
        <p>
          <b>
            <MultiLingualContent contentID="sivitText64Bold" />
          </b>
        </p>
        <br />
        <p>
          <MultiLingualContent contentID="sivitText65" />
        </p>
        <p>
          <MultiLingualContent contentID="sivitText66" />
        </p>
        <p>
          <MultiLingualContent contentID="sivitText67" />
        </p>
        <p>
          <MultiLingualContent contentID="sivitText68" />
        </p>
        <p>
          <MultiLingualContent contentID="sivitText69" />
        </p>
        <p>
          <MultiLingualContent contentID="sivitText70" />
        </p>
        <p>
          <MultiLingualContent contentID="sivitText71" />
        </p>

        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={sivit1} alt="סיבית" />
            <p>
              <MultiLingualContent contentID="sivitImg1" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage src={sivit2} alt="סיבית" />
            <p>
              <MultiLingualContent contentID="sivitImg2" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage src={sivit3} alt="סיבית" />
            <p>
              <MultiLingualContent contentID="sivitImg3" />
            </p>
          </div>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={sivit4} alt="סיבית" />
            <p>
              <MultiLingualContent contentID="sivitImg4" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage src={sivit5} alt="סיבית" />
            <p>
              <MultiLingualContent contentID="sivitImg5" />
            </p>
          </div>
          <div className="imgWrapper">
            <LazyLoadImage src={sivit6} alt="סיבית" />
            <p>
              <MultiLingualContent contentID="sivitImg6" />
            </p>
          </div>
        </div>
        <div className="informationImages">
          <div className="imgWrapper">
            <LazyLoadImage src={sivit7} alt="סיבית" />
            <p>
              <MultiLingualContent contentID="sivitImg7" />
            </p>
          </div>
        </div>
      </>
    </div>
  );
};

export default Sivit;
