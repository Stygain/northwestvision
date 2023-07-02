/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState } from 'react';

import { ImageImp } from '../Utils.js';
import ArrowLeft from './ArrowLeft.js';
import ArrowRight from './ArrowRight.js';
import ProgressDots from './ProgressDots.js';

import PageData from '../data/carousel.json';

function Content(props) {
  const styling = css`
    ${'' /* border: 1px solid green; */}

    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    z-index: 1;

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
      min-height: 100%;
      min-width: 100%;

      width: 100%;
      ${'' /* max-height: 100%; */}
    }

    .disp-img img {
      display: block;
      width: 100%;
      height: auto;
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

    .prev-img img {
      display: block;
      width: 100%;
      height: auto;
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

    .next-img img {
      display: block;
      width: 100%;
      height: auto;
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

    @keyframes slide-center-forwards {
      from {
        left: 0;
      }
      to {
        left: 100%;
      }
    }

    @keyframes slide-center-backwards {
      from {
        left: 0;
      }
      to {
        left: -100%;
      }
    }
  `;
  return (
    <div css={styling}>
      {props.prevItem != null ?
        <div className="prev-img">
          <img
            src={ImageImp(props.prevItem.source)}
            alt="" />
        </div>
        :
        <div></div>
      }
      <div className="disp-img">
        <img
          src={ImageImp(props.item.source)}
          alt="" />
      </div>
      {props.nextItem != null ?
        <div className="next-img">
          <img
            src={ImageImp(props.nextItem.source)}
            alt="" />
        </div>
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
    height: 66.7vw;
    width: 100vw;
    z-index: -1;

    box-shadow: 0px 15px 15px rgb(96, 96, 96);

    @media (min-width: 1300px) {
      top: 60px;
      left: 20%;
      height: 39.7vw;
      width: 60vw;
    }

    @media (max-width: 768px) {
      height: 65.2vw;
      top: 48px;
    }
  `;


    async function updateSlide(newCurrent) {
      var callback;
      if (newCurrent > current) {
        setSlideRightTrigger(true)
        callback = setSlideRightTrigger
      } else {
        setSlideLeftTrigger(true)
        callback = setSlideLeftTrigger
      }
      await new Promise(r => setTimeout(r, 800));
      setCurrent(newCurrent)
      // setSlideRightTrigger(false)
      // setSlideLeftTrigger(false)
      callback(false)
    }


  return (
    <div css={styling}>
      {current === 0 ?
        <div>
          <ArrowRight
            current={current}
            setCurrent={updateSlide}
            accentColor={PageData[current].accentColor} />
          <Content
            slideRightTrigger={slideRightTrigger}
            lideLeftTrigger={slideLeftTrigger}
            item={PageData[current]}
            nextItem={PageData[current+1]}
            prevItem={null} />
        </div> :
        current === PageData.length-1 ?
          <div>
            <ArrowLeft
              current={current}
              setCurrent={updateSlide}
              accentColor={PageData[current].accentColor} />
            <Content
              slideRightTrigger={slideRightTrigger}
              slideLeftTrigger={slideLeftTrigger}
              item={PageData[current]}
              prevItem={PageData[current-1]}
              nextItem={null} />
          </div> :
          <div>
            <ArrowLeft
              current={current}
              setCurrent={updateSlide}
              accentColor={PageData[current].accentColor} />
            <ArrowRight
              current={current}
              setCurrent={updateSlide}
              accentColor={PageData[current].accentColor} />
            <Content
              slideRightTrigger={slideRightTrigger}
              slideLeftTrigger={slideLeftTrigger}
              item={PageData[current]}
              prevItem={PageData[current-1]}
              nextItem={PageData[current+1]} />
          </div>}

      <ProgressDots
        current={current}
        data={PageData}
        setCurrent={setCurrent}
        accentColor={PageData[current].accentColor} />
  	</div>
  );
}

export default Carousel;
