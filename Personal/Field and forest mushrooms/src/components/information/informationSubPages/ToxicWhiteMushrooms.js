import React from "react";
import { Helmet } from "react-helmet";
import MultiLingualContent from "../../../languages/MultiLingualContent";
import BackButton from "../../backButton";

const ToxicWhiteMushrooms = () => {
  return (
    <div className="inner-section" id="absorb">
      <Helmet>
        <title>פטרידע - פטריות לבנות רעילות</title>
        <meta name="description" />
      </Helmet>
      <BackButton path="/#information" />
      <h2>
        <MultiLingualContent contentID="absorb" />
      </h2>
      <a
        href="https://en.wikipedia.org/wiki/Destroying_angel"
        target="_blank"
        rel="noreferrer"
      >
        פטריות לבנות רעילות בוויקיפדיה
      </a>{" "}
    </div>
  );
};

export default ToxicWhiteMushrooms;
