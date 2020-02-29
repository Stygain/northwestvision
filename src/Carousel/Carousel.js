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
    accentColor: "rgb(56, 215, 78)"
  },
  {
    source: "./home/IMG_5483.jpg",
    accentColor: "rgb(41, 35, 147)"
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

    transition: background-color 0.5s cubic-bezier(.4,.38,.12,1);
    background-color: ${props.item.bgColor};

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;

    overflow: hidden;

    img {
      ${'' /* border: 2px solid blue; */}

      width: 100%;
      ${'' /* max-height: 100%; */}

    }
  `;
  return (
    <div css={styling}>
      <img src={ImageImp(props.item.source)}
        alt="" />
  	</div>
  );
}

function Carousel() {
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
  return (
    <div css={styling}>
      {current === 0 ?
        <ArrowRight current={current} setCurrent={setCurrent} accentColor={pageData[current].accentColor} /> :
        current === pageData.length-1 ?
          <ArrowLeft current={current} setCurrent={setCurrent} accentColor={pageData[current].accentColor} /> :
          <div>
            <ArrowLeft current={current} setCurrent={setCurrent} accentColor={pageData[current].accentColor} />
            <ArrowRight current={current} setCurrent={setCurrent} accentColor={pageData[current].accentColor} />
          </div>}

      <Content item={pageData[current]} />
      <ProgressDots current={current} data={pageData} setCurrent={setCurrent} accentColor={pageData[current].accentColor} />
  	</div>
  );
}

export default Carousel;
