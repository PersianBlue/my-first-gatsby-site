import * as React from "react";
import Layout from "../components/layout";
import App from "../components/App";
import ButtonMaster from "../components/ButtonMaster";
import "../components/indexBackground.css";
import TurnYourEyes from "../assets/audio/TurnYourEyes.mp3";
import ReactAudioPlayer from "react-audio-player";

let counter = 1;

const playAudio = () => {
  var audio = new Audio(TurnYourEyes);
  audio.play();
};

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page">
      <p>Hey guys, welcome back to my Youtube channel!</p>
      <App counter={counter} />
      <ButtonMaster />
      <ReactAudioPlayer src={TurnYourEyes} autoPlay controls />
    </Layout>
  );
};
export default IndexPage;
