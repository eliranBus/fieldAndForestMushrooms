import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import MultiLingualContent from "../languages/MultiLingualContent";
import decorative from "../assets/decoratives/2.png";
import logo from "../assets/images/logo2.jpg";
import sign from "../assets/decoratives/sign.png";
import flies from "../assets/images/flies.jpeg";

const About = () => {
  return (
    <div className="section" id="about">
      <div className="about-wrapper inner-section">
        <h2>
          <MultiLingualContent contentID="about" />
        </h2>
        <p>
          <MultiLingualContent contentID="aboutText1" />
        </p>
        <br />
        <p>
          <MultiLingualContent contentID="aboutText2" />
        </p>
        <br />
        <p>
          <MultiLingualContent contentID="aboutText3" />
        </p>
        <br />
        <p>
          <MultiLingualContent contentID="aboutText4" />
        </p>
        <br />
        <h3 className="whatsInSite">
          <MultiLingualContent contentID="aboutWhatsInSite" />
        </h3>
        <p>
          <MultiLingualContent contentID="aboutWhatsInSiteBullet1" />
        </p>
        <p>
          <MultiLingualContent contentID="aboutWhatsInSiteBullet2" />
        </p>
        <p>
          <MultiLingualContent contentID="aboutWhatsInSiteBullet3" />
        </p>
        <p>
          <MultiLingualContent contentID="aboutWhatsInSiteBullet4" />
        </p>
        <p>
          <MultiLingualContent contentID="aboutWhatsInSiteBullet5" />
        </p>
        <p>
          <MultiLingualContent contentID="aboutWhatsInSiteBullet6" />
        </p>
        <p>
          <MultiLingualContent contentID="aboutWhatsInSiteBullet7" />
        </p>
        <br />
        <p>
          <MultiLingualContent contentID="aboutWhatsInSiteBullet8" />
        </p>
        <br />
        <div className="news">
          <h3 className="whatsInSite">
            <MultiLingualContent contentID="news" />
          </h3>
          <div className="news-text">
            <h4>פטרייה משמשת מצע לגידול חרקים</h4>
            <p>
              אכילת פטריות מהטבע ומגידולים גוברת בתרבות שלנו ועולות שאלות מתחום
              צמחונות, טבעונות כשרות ומזיקים בגידול פטריות. מבין החרקים יש החיים
              במצע רבגוני, כולל פטריות, ויש שפטריות הן המצע היחידי בחייהם. לאחר
              הטלת הביצים בוקעים זחלים או רימות (לא תולעים !) הניזונים מבשר
              ומרקמות הפטרייה. שלב הבא יהיה הגולם וממנו יבקע הבוגר, ואז יוצא ועף
              להתחיל מחזור במצע חדש.
            </p>
            <br />
            <p>
              בעולם ידועים סוגי חיפושיות, עשים, זבובים ועוד, החיים וניזונים רק
              מתפטיר או גוף פרי של פטרייה. במוזיאון הטבע הכנסנו גושיות בוגרות
              לתוך בית גידול קטן ובקעו בו זבובים מהמין Muscina levida שלא היה
              ידוע בישראל, קרוב לזבוב הבית אך מעט שונה וגדול ממנו. בתוך הפטרייה
              קשתנית טבעתית זוהתה חיפושית מהסוג חדקונית. נמשיך ונבדוק מינים
              נוספים.
            </p>
            <div className="aboutImgWrapper">
              <LazyLoadImage src={flies} alt="אמנית" />
            </div>
          </div>
          <LazyLoadImage src={sign} alt="" className="sign-img" />
        </div>
        <br />
        <h3 className="whatsInSite">
          <MultiLingualContent contentID="thanks" />
        </h3>
        <p>
          <MultiLingualContent contentID="thanksText1" />
        </p>
        <p>
          <MultiLingualContent contentID="thanksText2" />
        </p>
        <p>
          <MultiLingualContent contentID="thanksText3" />
        </p>
        <p>
          <MultiLingualContent contentID="thanksText4" />
        </p>
        <p>
          <MultiLingualContent contentID="thanksText5" />
        </p>
        <p>
          <MultiLingualContent contentID="thanksText6" />
        </p>
        <p>
          <MultiLingualContent contentID="thanksText7" />
        </p>
        <br />
        <LazyLoadImage src={logo} alt="logo" className="logoPng" />
        <br />
        <p>
          <MultiLingualContent contentID="aboutFinalText" />
        </p>
        <br />
      </div>
      <LazyLoadImage src={decorative} alt="" className="decorative-about" />
    </div>
  );
};

export default About;
