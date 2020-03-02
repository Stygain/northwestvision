/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState } from 'react';

import { ImageImp } from '../Utils.js';
import ArrowLeft from './ArrowLeft.js';
import ArrowRight from './ArrowRight.js';
import ProgressDots from './ProgressDots.js';

const pageData = [
  {
    source: "./home/IMG_7371.jpg",
    accentColor: "rgb(0, 0, 0)"
  },
  {
    source: "./home/IMG_7499.jpg",
    accentColor: "rgb(175, 175, 175)"
  },
  {
    source: "./home/IMG_5483.jpg",
    accentColor: "rgb(110, 110, 110)"
  }
]

function Content(props) {
  const styling = css`
    ${'' /* border: 1px solid green; */}

    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1;

    ${'' /* animation: ${props.slideRightTrigger ? "slide" : ""};
    animation-duration: 1s;
    animation-iteration-count: 1;
    animation-direction: normal;
    animation-fill-mode: forwards; */}
    transition: background-color 0.5s cubic-bezier(.4,.38,.12,1);
    background-color: ${props.item.bgColor};

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;

    overflow: hidden;

    .disp-img {
      ${'' /* border: 2px solid blue; */}

      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;

      width: 100%;
      ${'' /* max-height: 100%; */}
    }

    .prev-img {
      ${'' /* border: 2px solid red; */}

      position: absolute;
      top: 0;
      left: -100%;
      height: 100%;
      width: 100%;
      z-index: 1;


      animation: ${props.slideLeftTrigger ? "slide-backwards" : ""};
      animation-duration: 0.8s;
      animation-iteration-count: 1;
      animation-direction: normal;
      animation-fill-mode: forwards;
      transition: background-color 0.5s cubic-bezier(.4,.38,.12,1)
                  animation 1s ease;
    }

    .next-img {
      ${'' /* border: 2px solid green; */}

      position: absolute;
      top: 0;
      left: 100%;
      height: 100%;
      width: 100%;


      animation: ${props.slideRightTrigger ? "slide-forwards" : ""};
      animation-duration: 0.8s;
      ${'' /* animation-iteration-count: 1; */}
      animation-direction: normal;
      animation-fill-mode: forwards;
      transition: background-color 0.5s cubic-bezier(.4,.38,.12,1)
                  animation 1s ease;
    }


    @keyframes slide-forwards {
      from {
        left: 100%;
      }
      to {
        left: 0;
      }
    }

    @keyframes slide-backwards {
      from {
        left: -100%;
      }
      to {
        left: 0;
      }
    }
  `;
  return (
    <div css={styling}>
      {props.prevItem != null ?
        <img className="prev-img"
          src={ImageImp(props.prevItem.source)}
          alt="" />
        :
        <div></div>
      }
      <img className="disp-img"
        src={ImageImp(props.item.source)}
        alt="" />
      {props.nextItem != null ?
        <img className="next-img"
          src={ImageImp(props.nextItem.source)}
          alt="" />
        :
        <div></div>
      }
  	</div>
  );
}

function Carousel() {
  const [ slideRightTrigger, setSlideRightTrigger ] = useState(false);
  const [ slideLeftTrigger, setSlideLeftTrigger ] = useState(false);
  const [ current, setCurrent ] = useState(0);

  const styling = css`
    ${'' /* border: 2px solid red; */}

    position: absolute;
    top: 60px;
    left: 0;
    min-height: 615px;
    width: 100%;
    z-index: -1;
  `;


    async function updateSlide(newCurrent) {
      let responseBody = {};
      console.log("BEFORE");
      if (newCurrent > current) {
        console.log("RIGHT");
        setSlideRightTrigger(true)
      } else {
        console.log("LEFT");
        setSlideLeftTrigger(true)
      }
      await new Promise(r => setTimeout(r, 800));
      console.log("AFTER");
      setCurrent(newCurrent)
      setSlideRightTrigger(false)
      setSlideLeftTrigger(false)
    }


  return (
    <div css={styling}>
      {current === 0 ?
        <div>
          <ArrowRight current={current} setCurrent={updateSlide} accentColor={pageData[current].accentColor} />
          <Content slideRightTrigger={slideRightTrigger} slideLeftTrigger={slideLeftTrigger} item={pageData[current]} nextItem={pageData[current+1]} prevItem={null} />
        </div> :
        current === pageData.length-1 ?
          <div>
            <ArrowLeft current={current} setCurrent={updateSlide} accentColor={pageData[current].accentColor} />
            <Content slideRightTrigger={slideRightTrigger} slideLeftTrigger={slideLeftTrigger} item={pageData[current]} prevItem={pageData[current-1]} nextItem={null} />
          </div> :
          <div>
            <ArrowLeft current={current} setCurrent={updateSlide} accentColor={pageData[current].accentColor} />
            <ArrowRight current={current} setCurrent={updateSlide} accentColor={pageData[current].accentColor} />
            {console.log("CURRENT " + current)}
            <Content slideRightTrigger={slideRightTrigger} slideLeftTrigger={slideLeftTrigger} item={pageData[current]} prevItem={pageData[current-1]} nextItem={pageData[current+1]} />
            {/* <Content item={pageData[current]} /> */}
          </div>}

      {/* <Content slideRightTrigger={slideRightTrigger} item={pageData[current]} nextItem={pageData[current+1]} /> */}
      <ProgressDots current={current} data={pageData} setCurrent={setCurrent} accentColor={pageData[current].accentColor} />
  	</div>
  );
}

export default Carousel;
