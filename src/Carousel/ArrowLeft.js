/** @jsx jsx */
import { jsx, css } from '@emotion/core';
import { useState } from 'react';


function ArrowLeft(props) {
  const [ hover, setHover ] = useState(false);

  const styling = css`
    &.button-container {
      ${'' /* border: 1px solid green; */}

      position: absolute;
      top: 48%;
      width: 40px;
      height: 40px;
      z-index: 3;

      cursor: pointer;
    }

    &.button-container.left {
      left: 10px;
    }

    .arrow {
      width: 25px;
      height: 8px;

      transition: color 0.4s ease-in-out,
                  transform 0.3s ease-in-out;
      background-color: ${props.accentColor};
    }

    .arrow.top.left {
      transform: translateY(10px) translateX(7px) rotate(-45deg);
    }

    .arrow.bot.left {
      transform: translateY(14px) translateX(7px) rotate(45deg);
    }

    .arrow.top.left.hover {
      transform: translateY(9px) translateX(6px) rotate(-50deg);
    }

    .arrow.bot.left.hover {
      transform: translateY(15px) translateX(6px) rotate(50deg);
    }
  `;

  return (
    <div css={styling}
      className="button-container left"
      onClick={
        () => {
          props.setCurrent(props.current - 1)
        }
      }
      onMouseEnter={
        () => {
          setHover(true);
        }
      }
      onMouseLeave={
        () => {
          setHover(false);
        }
      }>
      <div className={hover ? "arrow top left hover" : "arrow top left"}></div>
      <div className={hover ? "arrow bot left hover" : "arrow bot left"}></div>
    </div>
  );
}

export default ArrowLeft;
