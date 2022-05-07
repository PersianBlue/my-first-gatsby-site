import * as React from "react";
import Layout from "../components/layout";
import App from "../components/App";
import ButtonMaster from "../components/ButtonMaster";
import "../components/indexBackground.css";

let counter = 1;

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <body>
        <p>Hey guys, welcome back to my Youtube channel!</p>
        <App counter={counter} />
        <ButtonMaster />
        <video width="320" height="240" controls>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/L57ox0iQU7A"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </video>
      </body>
    </Layout>
  );
};
export default IndexPage;
