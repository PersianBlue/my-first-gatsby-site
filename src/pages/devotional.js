import React from "react";
import DayByDay from "../assets/audio/DaybyDayreading.m4a";
import ReactAudioPlayer from "react-audio-player";
import Layout from "../components/Layout/layout";

const Devotional = () => {
  return (
    <Layout pageTitle="Devotional">
      <div>
        <ReactAudioPlayer src={DayByDay} controls volume={0.4} autoPlay />
      </div>
    </Layout>
  );
};

export default Devotional;
