// Blogs.js

import React from "react";
import Energy from "../images/hands.jpg";
import Windmill from "../images/hands.jpg";
import yellow from "../images/hands.jpg";
import read from "../images/hands.jpg";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import "./Blog.css";

const Blogs = () => {
  const dummytext = {
    headtext: "Lorem Ipsum is simply a dummy text",
    subtext: "DECEMBER 06,2023 /ADMIN",
    text: "Lorem ipsum is simply a dummy text of the priniting and typesetting industry, Lorem Ipsum has been the industry's standard dummy text ever since the 1500s ,when an unknown printer.",
  };

  return (
    <div className="wrapper">
      <div className="headerwrapper">
        <div className="headertxt">BLOGS & NEWS</div>
        <div className="latest">Latest News Feeds</div>
      </div>
      <div className="newwrapper">
        <div className="photoswrapper">
          <div className="eachphoto">
            <div className="imagewrapper">
              <img src={Energy} className="photo" alt="Energy" />
            </div>
            <div className="subpart">
              <div className="headtext">{dummytext.headtext}</div>
              <div className="subtext">{dummytext.subtext}</div>
              <div className="text">{dummytext.text}</div>
              <div className="readinfo">
                <div className="readmore">READ MORE</div>
                <MdKeyboardDoubleArrowRight className="rightarrow" />
              </div>
            </div>
          </div>
          <div className="eachphoto">
            <div className="imagewrapper">
              <img src={Windmill} className="photo" alt="Windmill" />
            </div>
            <div className="subpart">
              <div className="headtext">{dummytext.headtext}</div>
              <div className="subtext">{dummytext.subtext}</div>
              <div className="text">{dummytext.text}</div>
              <div className="readinfo">
                <div className="readmore">READ MORE</div>
                <MdKeyboardDoubleArrowRight className="rightarrow" />
              </div>
            </div>
          </div>
          <div className="eachphoto">
            <div className="imagewrapper">
              <img src={yellow} className="photo" alt="Yellow" />
            </div>
            <div className="subpart">
              <div className="headtext">{dummytext.headtext}</div>
              <div className="subtext">{dummytext.subtext}</div>
              <div className="text">{dummytext.text}</div>
              <div className="readinfo">
                <div className="readmore">READ MORE</div>
                <MdKeyboardDoubleArrowRight className="rightarrow" />
              </div>
            </div>
          </div>
          <div className="eachphoto">
            <div className="imagewrapper">
              <img src={read} className="photo" alt="Read" />
            </div>
            <div className="subpart">
              <div className="headtext">{dummytext.headtext}</div>
              <div className="subtext">{dummytext.subtext}</div>
              <div className="text">{dummytext.text}</div>
              <div className="readinfo">
                <div className="readmore">READ MORE</div>
                <MdKeyboardDoubleArrowRight className="rightarrow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
